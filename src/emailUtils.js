import MailosaurClient from 'mailosaur';
const client = new MailosaurClient('1NcYNUphDK5FVWhaqtlV1SsqtUqOuDkh');  // Replace with your Mailosaur API key

export async function getVerificationCode() {
    const emailTest = 'industry-wrote@gjsqgy6s.mailosaur.net'
    const serverId = "gjsqgy6s"
    const message = await client.messages.get(serverId, {
    sentFrom: "noreply+a38bb04@id.atlassian.com"
  });
    const code = message.text.body.match(/\b[A-Z0-9]{6}\b/g)
    console.log(code.toString())
    return code.toString()
}
