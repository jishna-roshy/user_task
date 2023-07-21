const db=require('./db')
const sign=(id,uname,email,password)=>{
    return db.Sighn.findOne({uname,email,password}).then(result=>{
        if(result){
            return{
                statusCode:401,
                message:"Alredy registerd"
            }
        }
        else{
            const newSign=new db.Sighn({
                id,
                uname,
                email,
                password
            })
            newSign.save()
            return{
                statusCode:200,
                message:"Register Succefully"
            }
        }
    })
}
const Login=(uname,password)=>{
    return db.Sighn.findOne({uname,password}).then(result=>{
        if(result){
            return {
                statusCode:200,
                message:"Login Success"
            }
        }
        else{
            return{
                statusCode:400,
                message:"Incorrect psw or uname"
            }
        }
    })
}
module.exports={
    sign,Login
}