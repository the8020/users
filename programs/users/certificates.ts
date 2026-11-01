import { text as localizedText } from "/p/the8020/i18n/mod.ts";
import { msg } from "/p/the8020/users/i18n/messages.ts";
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
      title: msg("certificates.certificates_username", { username: username }),
      model,
      schema,
      layout: {
        schema: 1,
        id: "user-certificates",
        root: {
          toolbar: [
            {
              id: "add",
              label: msg("certificates.add_certificate"),
              kind: "primary",
            },
            { id: "refresh", label: msg("certificates.refresh") },
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
      title: msg("certificates.add_certificate"),
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
        actions: [{
          id: "save",
          label: msg("certificates.add_certificate"),
          kind: "primary",
        }],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action === "save") {
      try {
        await addCertificate(username, model.data.label, upload.take());
        sendMessage(
          localizedText(msg("certificates.certificate_added")),
          "success",
        );
        return;
      } catch (error) {
        sendMessage(
          error instanceof Error
            ? error.message
            : localizedText(msg("certificates.certificate_could_not_be_added")),
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
      title: selected.label || localizedText(msg("program.certificate")),
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
          label: msg("certificates.remove_certificate"),
          kind: "danger",
        }],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action !== "remove") continue;
    const confirmed = await confirmAction({
      id: "user-certificate-remove",
      title: msg("certificates.remove_certificate_2"),
      message: localizedText(
        msg("certificates.subsequent_calls_using_this_certificate_will_be"),
      ),
      confirm: msg("certificates.remove_certificate"),
    });
    if (!confirmed) continue;
    try {
      await removeCertificate(username, selected.fingerprint);
      sendMessage(
        localizedText(msg("certificates.certificate_removed")),
        "success",
      );
      return;
    } catch (error) {
      sendMessage(
        error instanceof Error
          ? error.message
          : localizedText(msg("certificates.certificate_could_not_be_removed")),
        "error",
      );
    }
  }
}
