const { createTransport } = require("nodemailer");
const yargs = require("yargs");

function cli(argv = process.argv) {
  return yargs(argv.slice(2))
    .options({
      mail: {
        alias: "m",
        demandOption: true,
        type: "string",
        description: "Email to send",
      },
      password: {
        alias: "p",
        demandOption: true,
        type: "string",
        description: "Password ",
      },
      subject: {
        alias: "s",
        demandOption: true,
        type: "string",
        description: "Subject of the email",
      },
      text: {
        alias: "t",
        demandOption: true,
        type: "string",
        description: "Text of the email",
      },
    })
    .parseSync();
}

// holi

const args = cli();

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: args.mail,
    pass: args.password,
  },
});

const mailOptions = {
  from: "Servidor Node.js",
  to: args.mail,
  subject: args.subject,
  html: args.text,
};

(async () => {
  try {
    const res = await transporter.sendMail(mailOptions);
    console.log({ res });
  } catch (error) {
    console.error(error);
  }
})();