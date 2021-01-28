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

