const nodemailer = require("nodemailer");
require('dotenv').config();

function sendemail(email){
    const trans = nodemailer.createTransport({
        service: "gmail",
        auth:{
        user:"mohammedgargoum01@gmail.com",
        pass:process.env.SENDEMAILPASS,
        }
    })
    const mailpotion = {
        from:"mohammedgargoum01@gmail.com",
        to:email,
        subject:"welcome",
        html:`<h1> hello ${email} </h1>`
    }

    trans.sendMail(mailpotion, (err,success) => {
        if(err){
       console.log(err)
        }else{
            console.log("email has sent")
        }
    })
}


module.exports = {
    sendemail
}