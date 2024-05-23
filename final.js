
const express = require('express');
const app= express();
const Port=2000;
 app.use(express.static('public')) //iska use css ko enable krne ke liye use kiya ja rha hai 

 app.use(express.json()) // iski help se hum data bhej sakte hai json format me  THUNDERCLIENT SE yh phir POSTMAN Se
 app.use(express.urlencoded(({extended:true}))) // yh post method ke data ke  liye 
app.set('view engine',"ejs");
app.listen(Port,()=>{
    console.log(`server running on  ${Port}`);
})

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get('/user',(req,res)=>{
    res.render('form')
})

app.get('/fillForm',(req,res)=>{
    // res.send("Done")
    console.log(req.body);
  let {firstname,email,pass}=req.query
  res.send(`${firstname}, ${email}, ${pass}`)

})

app.post('/fillForm',(req,res)=>{

    let {firstname,email,pass}=req.body
  res.send(`${firstname}, ${email}, ${pass}`)
})