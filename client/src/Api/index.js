// import axios from 'axios';

const app={}

app.login = async function (email, password,cb){
  await fetch('http://localhost:5000/users/login', {
        method :"POST",
        headers:{
            'Content-type' :'application/json'
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
       })
       .then(response =>{
         response.json().then(message =>{
           cb(message)
         })
       })
       .catch(err =>{
        cb(err)
       })
}

app.signup = async function (username,email, password,cb){
    await fetch('http://localhost:5000/users/signup', {
          method :"POST",
          headers:{
              'Content-type' :'application/json'
          },
          body: JSON.stringify({
            username:username,
            email:email,
            password:password
          })
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }

  app.account = async function (email,cb){
    await fetch('http://localhost:5000/users/account', {
          method :"POST",
          headers:{
            // 'Authorization' : 'Bearer'+localStorage.token,
              'Content-type' :'application/json'
          },
          body: JSON.stringify({
            email:email
          })
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }
  
  app.logout = async function(state,cb) {
    await fetch('http://localhost:5000/logout', {
      method :"POST",
      headers:{
        // 'Authorization' : 'Bearer'+localStorage.token,
          'Content-type' :'application/json'
      },
      body: JSON.stringify({
        state:state
      })
     })
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    }).catch(err => {
        if(err) throw new Error(err)
    })
}

  app.postproducts = async function (name, price,desc,productImage,cb){
    await fetch('http://localhost:5000/products', {
           method :"POST",
          headers:{
            // 'Authorization' : 'Bearer'+localStorage.token,
              'Content-type' :'application/json'
          },
          body: JSON.stringify({
            name:name,
            price:price,
            desc:desc,
            productImage:productImage
          })
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }

  app.getproducts = async function (){
    await fetch('http://localhost:5000/products', {
           method :"GET",
          headers:{
              'Content-type' :'application/json'
          },
          // body: JSON.stringify({
          //   name:name,
          //   price:price,
          //   productImage:productImage
          // })
         })
         .then(response => {
          response.json().then(products => {
              localStorage.products = JSON.stringify(products.products)
          })
         })
         .catch(err =>{
           throw new Error(err)
         })
  }

  app.productdetails = async function(id,cb) {
    await fetch('http://localhost:5000/products/'+id)
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    })
    .catch(err => {
        throw new Error(err)
    }) 
}


app.contact = async function(name, email, subject, message,cb) {
  await fetch('http://localhost:5000/users/contact',{
      method: 'POST',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify({
          name:name,
          email: email,
          subject: subject,
          message: message
      })
  })
  .then(response => {
      response.json().then(message => {
          cb(message)
      })
  })
  .catch(err => {
      cb(err)
  })
}

export default app;