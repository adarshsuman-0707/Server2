const express = require('express');
const app=express();

app.use('/home',express.static('public'))

app.use(express.urlencoded({extended:true}))
// app.use(express.json())
app.set('view engine','ejs')
app.listen(3000,()=>{
    console.log("run");
})
let data=[1,2,3,4,5];
app.get('/data',(req,res)=>{
    if(req.xhr){
    res.json(data)}
    else{
        res.render('index',{data})
    }
})
app.get('/cat',(req,res)=>{
    res.send('cat')
})
app.post('/data',(req,res)=>{
    let {inp}=req.body
    console.log(inp);
    let inp2=parseInt(inp)

    data.push(inp2)    
 res.send("ata")
})


// here template library work

app.post('/give',(req,res)=>{
    console.log(req.body);
    let {num}=req.body
    data.push(num);
    res.redirect('/data')
})