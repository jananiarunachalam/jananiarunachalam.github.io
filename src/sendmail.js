import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);
const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
