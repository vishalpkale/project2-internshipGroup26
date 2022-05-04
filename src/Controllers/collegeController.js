// new change
const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")



const collegeCreation = async function (req, res) {
    try {
        const { name, fullName, logoLink, isDeleted } = req.body;
        if (!req.body) {
            res.status(400).send({ status: false, msg: "Please provide valid details" })
        }
        if (!name) {
            res.status(400).send({ status: false, msg: "Please provide valid name" })
        }
        if (!fullName) {
            res.status(400).send({ status: false, msg: "Please provide full name" })
        }
        if (!logoLink) {
            res.status(400).send({ status: false, msg: "Please provide valid link" })
        }
        if (isDeleted = true) {
            res.status(400).send({ status: false, msg: "unable to fetch, data already deleted" })
        }
        const createCollege = await collegeModel.create(req.body)
        res.status(201).send({ status: true, data: createCollege })

    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



const getcollege = async function (req, res) {
    try {
        let collegename = req.query;
        
        if(!(Object.keys(collegename).length>0) /*|| (!(Object.values(collegename))>0)*/){
            res.status(400).send({ status: false, msg: "Please provide name of the college" })
        }
        
        let name1 = Object.values(collegename)
        let college = await collegeModel.findOne({ name: name1 })
        
        if(!college){
            res.status(404).send({status: false, msg: "no data found" })
        }

        let colle_id = college._id.toString()

        let studentlist = await internModel.find({ collegeId: colle_id }).select({ _id: 1, name: 1, email: 1, mobile: 1 })
        let dataa = {
            "name": college.name,
            "fullName": college.fullName,
            "logoLink": college.logoLink,
            "interests": studentlist
        }


        res.status(200).send({ data: dataa })
    }
    catch (err) {

        res.status(500).send({ statu: false, msg: err.message })
    }
}

module.exports = { getcollege, collegeCreation }