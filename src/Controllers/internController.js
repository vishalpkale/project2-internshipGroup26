const interModel = require('../models/internModel')
const collegeModel=require("../models/collegeModel")
const mongoose = require('mongoose')
const EmailValidator=require('email-validator')
const Validatemobile=require('validate-phone-number-node-js')

const interCreation = async function (req, res) {
    try {
        const { name, email, mobile, collegeId } = req.body;
        if (!req.body) {
            res.status(400).send({ status: false, msg: "Please provide valid details" })
        }
        if (!name) {
            res.status(400).send({ status: false, msg: "Please provide valid name" })
        }
        if (!email) {
            res.status(400).send({ status: false, msg: "Please provide valid email" })
        }
        if (!mobile) {
            res.status(400).send({ status: false, msg: "Please provide valid mobile number" })
        }
        if (!collegeId) {
            res.status(400).send({ status: false, msg: "Please provide valid college id" })
        }
    if(!EmailValidator.validate(email))
    {
        res.status(400).send({ status: false, msg: "Please correct email formate" })
    }
    if(!Validatemobile.validate(mobile)){
        res.status(400).send({ status: false, msg: "Please check mobile number is correct or not" })
    }
     const chkcollege=await collegeModel.findById(collegeId)
     if(!chkcollege)
     {
         res.status(400).send({status:false, msg:"college does not exits,please check college id"})
     }
        const createIntern = await interModel.create(req.body)
        res.status(201).send({ status: true, data: createIntern })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg:err.msg })
    }
}

module.exports.interCreation = interCreation;