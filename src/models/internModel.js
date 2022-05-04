const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.ObjectId


const interSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    collegeId: {
        type:ObjectId,
        ref: 'College'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timeseries:true})

module.exports=mongoose.model('Intern',interSchema)
