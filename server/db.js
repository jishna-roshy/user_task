const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/list')


//model
const Sighn=mongoose.model('Sighn',{
    id:String,
    uname:String,
    email:String,
    password:String
})
module.exports={
    Sighn
}
