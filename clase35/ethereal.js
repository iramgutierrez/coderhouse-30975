const { createTransport } = require('nodemailer')

const TEST_MAIL = 'tyrel.howe@ethereal.email'
const TEST_PASSWORD = 'QMuGt2JmKmRw54stVC'

const trasporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: TEST_PASSWORD
  }
})

const mailOptions = {
  from: `Servidor Node.js <iram@mail.com>`,
  to: TEST_MAIL,
  subject: 'Mail de prueba desde Node.js',
  html: `
    <h1 style="color: blue;">
      Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span>
    </h1>
  `
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