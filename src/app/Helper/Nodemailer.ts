
import nodemailer from "nodemailer";

interface EmailData {
    email:string
    number:string
    name:string
    message:string
};

export async function sendEmail(data:EmailData) {
  const { email, name, number , message} = data;

    let output = `
    <p> ${email}</p>
    <p> ${number}</p>
    <p> ${name}</p>
    <p> ${message}</p>
  `;
  
  let transport = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_AUTH_USER_EMAIL,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailoptions = {
    from: process.env.EMAIL_AUTH_USER_EMAIL,
    to: "harissaeed583@gmail.com" ,
    subject: "New Query On Ammar Forte",
    html: output,
  };

  transport.sendMail(mailoptions, (error, info) => {
    if (error) {
      return false;
    }
    return true;
  });
}
