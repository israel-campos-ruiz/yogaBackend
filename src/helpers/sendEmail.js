import nodemailer  from"nodemailer";
 
export const sendEmail = async (email,message,password) =>  { 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.PASS}`
    },
});

  try {
      // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'ephraim.ritchie@ethereal.email',
    to: `${email.trim()}`,
    subject: 'cambio de contraseña 🙈',
    text: `${message}`,
    html: 
    `<div>
        <h3>${message},${password}</h3>

    </div>
    `,
    cc:`${email}`,
    replyTo:`${email}`
  });

  console.log(info.messageId)

  } catch (error) {
         console.log(error)      
  }
}


export const sendLinkRecoverPassword = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.PASS}`
    },
});
  const link = transporter.sendMail({
    to:`${email}`,
    from:'ephraim.ritchie@ethereal.email',
    subject:'recuperar contraseña',
    html:`<p>Recibimos tu petición para recuperar tu contraseña</p>
          <br/>
          <h5> Haz click en el siguiente enlace
            <a href="http://localhost:3000/recuperar/${token}">¡click aquí</a>
          </h5>
          `
  })
}
