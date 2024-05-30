const express=require('express');
const { Rss } = require('lucide-react');
const methodOverride= require('method-override');
const app=express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')
app.use(methodOverride('_method'))
app.use(express.static('public'))
let comments = [
    {
        id:0,
        username:"Son",
        comment:"chitkara is a nice university 0"
    },
    {
        id:1,
        username:"Dad",
        comment:"chitkara is a nice university 1"
    },
    {
        id:2,
        username:"Mother",
        comment:"chitkara is a nice university 2"
    }
    , {
        id:3,
        username:"Daughter",
        comment:"chitkara is a nice university 2"
    }
  ]

app.listen(4000,()=>{
    console.log("running");
})
app.get('/blog',(req,res)=>{
    res.render('cruds',{comments})
})

// app.get('/blog/:id',(req,res)=>{
//   let {id}=req.params
//   let data = comments.find((data)=>data.id==id)
//   res.render('edit',{data})
// })
app.get('/blog/:id',(req,res)=>{
    let {id} =req.params;
    comments.find(comment=>{
        if(comment.id==id){
            res.render('edit',{comment})
        }
    })

})
app.patch('/blog/:id',(req,res)=>{
let {id,username,comment}=req.body
  let data=comments.find((data)=>data.id==id)  
data.username=username
data.comment=comment
res.redirect('/blog')
})

app.get('/new',(req,res)=>{
    res.render('new')
})

app.post('/comment',(req,res)=>{
    let{username,comment}=req.body
    comments.push({username,comment,id:comments.length})
    res.redirect('/blog')
})

app.delete('/blog/:id',(req,res)=>{
   let {id}=req.params;
comments=comments.filter((data)=>data.id!=id)
//    res.render('cruds',{comments})
res.redirect('/blog')

})