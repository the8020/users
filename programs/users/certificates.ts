import {
  BACK_EVENT,
  callScreen,
  confirmAction,
  fileUpload,
  Model,
  presentModal,
  presentPage,
  sendMessage,
  z,
} from "/p/the8020/uui/mod.ts";
import {
  addCertificate,
  certificateValidity,
  listCertificates,
  removeCertificate,
} from "../../src/certificates.ts";
import {
  certificate,
  certificateFile,
  certificateRow,
} from "../../types/certificate.ts";

export async function userCertificates(username: string): Promise<void> {
  const schema = z.object({ certificates: z.array(certificateRow) });
  const model = new Model<z.infer<typeof schema>>({ certificates: [] });
  while (true) {
    model.data.certificates = (await listCertificates(username)).map((row) => ({
      ...row,
      validity: certificateValidity(row.expiresAt).text,
    }));
    const event = await callScreen({
      id: "user-certificates",
      title: `Certificates · ${username}`,
      model,
      schema,
      layout: {
        schema: 1,
        id: "user-certificates",
        root: {
          toolbar: [
            { id: "add", label: "Add certificate", kind: "primary" },
            { id: "refresh", label: "Refresh" },
          ],
          type: "list",
          bind: "certificates",
          key: "fingerprint",
          display: ["label", "subject", "expiresAt", "validity"],
        },
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action === "add") {
      await presentModal(() => enroll(username));
    }
    if (event.action === "select") {
      const selected = model.data.certificates.find((row) =>
        row.fingerprint === event.value
      );
      if (selected) await presentPage(() => detail(username, selected));
    }
  }
}

async function enroll(username: string) {
  const schema = z.object({
    label: certificate.shape.label,
    file: certificateFile,
  });
  const model = new Model({ label: "", file: "" });
  while (true) {
    model.data.file = "";
    const upload = fileUpload({
      maximumBytes: 65536,
      accept: ".pem,.crt,.cer,.der",
    });
    const event = await callScreen({
      id: "user-certificate-add",
      title: "Add certificate",
      model,
      schema,
      controls: [
        { id: "label", bind: "label", length: "long" },
        {
          id: "file",
          bind: "file",
          custom: upload.custom,
          fieldHelp: false,
          length: "long",
        },
      ],
      header: {
        actions: [{ id: "save", label: "Add certificate", kind: "primary" }],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action === "save") {
      try {
        await addCertificate(username, model.data.label, upload.take());
        sendMessage("Certificate added", "success");
        return;
      } catch (error) {
        sendMessage(
          error instanceof Error
            ? error.message
            : "Certificate could not be added",
          "error",
        );
      }
    }
  }
}

async function detail(
  username: string,
  selected: z.infer<typeof certificateRow>,
) {
  const model = new Model(selected);
  while (true) {
    const event = await callScreen({
      id: "user-certificate",
      title: selected.label || "Certificate",
      schema: certificateRow,
      model,
      controls: Object.keys(certificateRow.shape).map((key) => ({
        id: key,
        bind: key,
        readOnly: true,
        length: "long" as const,
      })),
      header: {
        actions: [{
          id: "remove",
          label: "Remove certificate",
          kind: "danger",
        }],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action !== "remove") continue;
    const confirmed = await confirmAction({
      id: "user-certificate-remove",
      title: "Remove certificate?",
      message: "Subsequent calls using this certificate will be denied.",
      confirm: "Remove certificate",
    });
    if (!confirmed) continue;
    try {
      await removeCertificate(username, selected.fingerprint);
      sendMessage("Certificate removed", "success");
      return;
    } catch (error) {
      sendMessage(
        error instanceof Error
          ? error.message
          : "Certificate could not be removed",
        "error",
      );
    }
  }
}
