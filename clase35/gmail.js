const { createTransport } = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const TEST_MAIL = 'iram.ch.30975@gmail.com'
const TEST_PASSWORD = 'ezrcgwdnnsnvciaq'

const trasporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: TEST_PASSWORD
  }
})

const mailOptions = {
  from: `Servidor Node.js <iram@mail.com>`,
  to: 'tyrel.howe@ethereal.email',
  subject: 'Mail de prueba desde Node.js',
  html: `
    <h1 style="color: blue;">
      Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span>
    </h1>
  `,
  attachments: [
    {
      path: 'node.png'
    }
  ]
}

const sendEmail = async () => {
  try {
    const response = await trasporter.sendMail(mailOptions)
    console.log({ response })
  } catch(e) {
    console.error(e)
  }
}

sendEmail()