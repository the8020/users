import {
  BACK_EVENT,
  callScreen,
  fileUpload,
  Model,
  presentModal,
  presentPage,
  sendMessage,
  z,
} from "/p/the8020/uui/mod.ts";
import {
  addCertificate,
  listCertificates,
  removeCertificate,
} from "../../src/certificates.ts";
import { certificate, certificateFile } from "../../types/certificate.ts";

export async function userCertificates(username: string): Promise<void> {
  const schema = z.object({ certificates: z.array(certificate) });
  const model = new Model<z.infer<typeof schema>>({ certificates: [] });
  while (true) {
    model.data.certificates = await listCertificates(username);
    const event = await callScreen({
      id: "user-certificates",
      title: `Certificates · ${username}`,
      model,
      schema,
      layout: {
        schema: 1,
        id: "user-certificates",
        root: {
          type: "list",
          bind: "certificates",
          key: "fingerprint",
          display: ["label", "subject", "expiresAt"],
        },
      },
      header: {
        actions: [
          { id: "add", label: "Add certificate", kind: "primary" },
          { id: "refresh", label: "Refresh" },
        ],
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

async function detail(username: string, selected: z.infer<typeof certificate>) {
  const model = new Model(selected);
  while (true) {
    const event = await callScreen({
      id: "user-certificate",
      title: selected.label || "Certificate",
      schema: certificate,
      model,
      controls: Object.keys(certificate.shape).map((key) => ({
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
    const confirmed = await presentModal(async () => {
      const result = await callScreen({
        id: "user-certificate-remove",
        title: "Remove certificate?",
        description: "Subsequent calls using this certificate will be denied.",
        schema: z.object({}),
        model: new Model({}),
        header: {
          actions: [{
            id: "remove",
            label: "Remove certificate",
            kind: "danger",
          }],
        },
      });
      return result.action === "remove";
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
