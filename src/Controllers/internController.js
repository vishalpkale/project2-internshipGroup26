const interModel = require('../models/internModel')
const collegeModel=require("../models/collegeModel")
const mongoose = require('mongoose')
const EmailValidator=require('email-validator')
const Validatemobile=require('validate-phone-number-node-js')

var isValid = function (value) { 
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;    
    return true; 
  };
 
  

const interCreation = async function (req, res) {
    try {
        
        const { name, email, mobile, collegeId } = req.body;
        if (!req.body) {
           return res.status(400).send({ status: false, msg: "Please provide valid details" })
        }
        if (!isValid(name)) {
          return  res.status(400).send({ status: false, msg: "Please provide valid name" })
        }
        
        if (!isValid(email)) {
           return res.status(400).send({ status: false, msg: "Please provide valid email" })
        }
        const uniqueEmail= await interModel.findOne({email:email})
        if (uniqueEmail) {
            return res.status(400).send({ status: false, msg: "email already registered" })
        }

        if (!isValid(mobile)) {
          return  res.status(400).send({ status: false, msg: "Please provide mobile number" })
        }
        if (!/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(mobile)) {
            return  res.status(400).send({ status: false, msg: "It's not a valid mobile number" })
        }
        const uniqueMobile= await interModel.findOne({mobile:mobile})
        if (uniqueMobile) {
            return res.status(400).send({ status: false, msg: "mobile number already registered" })
        }
        if (!isValid(collegeId)) {
          return  res.status(400).send({ status: false, msg: "Please provide valid college id" })
        }
    if(!EmailValidator.validate(email))
    {
       return res.status(400).send({ status: false, msg: "Please correct email formate" })
    }
    if(!Validatemobile.validate(mobile)){
       return res.status(400).send({ status: false, msg: "Please check mobile number is correct or not" })
    }
     const chkcollege=await collegeModel.findById(collegeId)
     if(!chkcollege)
     {
        return res.status(400).send({status:false, msg:"college does not exits,please check college id"})
     }
        const createIntern = await interModel.create(req.body)
        return  res.status(201).send({ status: true, data: createIntern })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg:err.message })
    }
}

module.exports.interCreation = interCreation;