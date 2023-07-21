const express=require('express')
 const app=express()
const cors=require('cors')

 const logic=require('./logic')
 app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())


app.post('/sign',(req,res)=>{
    logic.sign(req.body.id,req.body.uname,req.body.email,req.body.password).then(result=>
        {
            res.status(result.statusCode).json(result)
        })
})

app.post('/Login',(req,res)=>{
    logic.Login(req.body.uname,req.body.password).then(result=>
        {
            res.status(result.statusCode).json(result)
        })
})

 app.listen(8000,()=>{
    console.log("server started at 8000");
 })