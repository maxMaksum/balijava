

require('dotenv').config()
import nodemailer from 'nodemailer'
import { FaExclamationCircle } from 'react-icons/fa'


 export default async (req, res) => {
  const {name,email,message} = req.body

  console.log(name)
  console.log(process.env.PASS,"check")

  let transporter = nodemailer.createTransport({
    service:"gmail",
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  let mailOptions = {
    from: process.env.MAIL,
    to: process.env.MAIL, // list of receivers
    subject: `Hello  from  ${name}✔`, // Subject line
    html: 
    `<p>New Message From ${name} <p>
     <p>Contact Email ${email}  </p>
     <p>Message : ${message}</p>`, // html body`, // plain text body
  }


  try{
    transporter.sendMail(mailOptions, function(){
     console.log("email sent")
     res.json('emailsent')
    
    })
  }
  catch(err){
    console.log(err)
  }

 

  




}