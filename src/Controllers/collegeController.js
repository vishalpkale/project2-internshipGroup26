const collegeModel= require("../models/collegeModel")
const internModel= require("../models/internModel")

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
        if (isDeleted=true) {
            res.status(400).send({ status: false, msg: "unable to fetch, data already deleted" })
        }
        const createCollege = await collegeModel.create(req.body)
        res.status(201).send({ status: true, data: createCollege })
   
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.msg })
    }
}

module.exports.collegeCreation=collegeCreation;