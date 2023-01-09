const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  `Your API Key`
);
// const fs = require("fs");

// pathToAttachment = `${__dirname}/a.txt`;
// attachment = fs.readFileSync(pathToAttachment).toString("base64");

const msg = {
  to: "anuj.s@sgligis.com",
  from: "bhargav.v@sgligis.com", // Use the email address or domain you verified above
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
//   attachments: [
//     {
//       content: attachment,
//       filename: "demo.txt",
//       type: "application/txt",
//       disposition: "attachment",
//     },
//   ],
};
//ES6
// sgMail.send(msg).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );
//ES8
let i = 0;
// setInterval(()=>
// {
(async () => {
  try {
    await sgMail.send(msg);
    console.log(`Done ${++i}`);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
})();
// },200)
