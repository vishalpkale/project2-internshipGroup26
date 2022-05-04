const mongoose = require('mongoose')

const collegeSchema=new mongoose.Schema({
    name:String
},{timestams:true})


module.exports=mongoose.model('College',collegeSchema)