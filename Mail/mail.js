const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "hotmail",
  // port: 465,
  // secure: true,
  auth: {},
});

let mailOptions = {
  from: "bhargav.v@sgligis.com",
  to: "bhargav.v@sgligis.com",
  subject: "Hello",
  text: "Hello World",
  html: "<p>Hello World</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
