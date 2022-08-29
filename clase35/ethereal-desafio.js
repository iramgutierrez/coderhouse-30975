const { createTransport } = require('nodemailer')
const parseArgs = require('minimist')

const TEST_MAIL = 'miles.sauer67@ethereal.email'
const PASSWORD_MAIL = 'gvS2XV9bEX2vUUE4Kj'

const args = parseArgs(process.argv.slice(2))

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: PASSWORD_MAIL
  }
})

const defaultSubject = 'Mail de prueba desde Node.js'
const defaultHTML = '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'

const mailOptions = {
  from: 'Servidor Node.js <>',
  to: TEST_MAIL,
  subject: args.subject || defaultSubject,
  html: args.html || defaultHTML
}

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
  } catch (error) {
    console.log(err)
  }
}

sendEmail()
