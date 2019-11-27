const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const nodemailer= require('nodemailer');
const shared= require('../config/shared')

const User = require('../models/user');

exports.user_signup= (req, res, next) =>{
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if(user.length >= 1){
        return res.status(409).json({
          message:"Mail exists",
          state:false
        });
      }else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err){
            return res.status(500).json({
              error:err,
              state:false
            });
          } else {
            const user =new User({
              _id: new mongoose.Types.ObjectId(),
              username:req.body.username,
              email: req.body.email,
              password: hash
          });
          user
          .save()
          .then(result =>{
            res.status(201).json({
              message: 'user created',
              state:true
            });
          })
          .catch(err =>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
          }
        });
      }
    })
  }

  exports.user_login= (req,res, next) =>{
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1){
        return res.status(401).json({
          message: 'Email Not Found',
          state:false
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
        if (err) {
          return res.status(401).json({
            message: 'Password is incorrect',
            state:false
          });
        }
        if(result){
        const token= jwt.sign(
          {
           email: user[0].email,
           userId:user[0].email._id
         }, 'secret', {
           expiresIn:"1h"
         }
         );
          return res.status(200).json({
            message: 'Auth successful',
            token:token,
            state:true
          });
        }
        res.status(401).json({
         message: 'Password is incorrect',
         state:false
       });
      });
    })
    .catch(err => {
     console.log(err);
     res.status(500).json({
       error:err
     });
 });
 }

 exports.user_delete = (req, res, next) => {
    User.remove({ _id: req.params.userId})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted'
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
  }
 
  exports.user_account= (req, res, next) =>{
    User.findOne({ email: req.body.email })
      // if(err) return next (err)
      
    .exec()
    .then(user => {
      if (user.length = 1){
        return res.status(200).json({
          username:user.username,
          email:user.email,
          state:true
        });
      }
      
      return res.status(401).json({
        message: 'Email Not Found',
        state:false
      });
    }) 
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error:err
          });
      });
    }
  
  exports.user_logout =(req,res,done) => {
     req.logout()
    return res.status(200).json({
      state:false
    });
}  
  exports.user_contact =  (req, res, next) => {
    const output=`
    <p>You have new contact request</p>
    <h3>Contact details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
    const sender=`
    <li>Email: ${req.body.email}</li>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
     port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.EMAIL_PASS // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = {
    from: '"Nodemailer Contact"  <muneshdewnani@gmail.com> ', // sender address
    to: 'muneshdewnani@gmail.com', // list of receivers
    subject: "Node contact request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  }
   
  transporter.sendMail(info , (error,info) =>{
    if(error){
     return console.log(error)
    }else{
      res.status(201).json({
        message: 'Your message was sent successfully',
        state:true
      });
    }
  })
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}