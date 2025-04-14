import MailosaurClient from "mailosaur";
const client = new MailosaurClient("1NcYNUphDK5FVWhaqtlV1SsqtUqOuDkh"); // Replace with your Mailosaur API key

export async function getVerificationCode() {
  const serverId = "gjsqgy6s";
  const message = await client.messages.get(serverId, {
    sentFrom: "noreply+fa74ac0@id.atlassian.com",
  });
  const code = message.text.body.match(/\b[A-Z0-9]{6}\b/g);
  console.log(code.toString());
  return code.toString();
}
