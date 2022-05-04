const { router } = require('express')
const express=require('express')
const collegeController=require("../Controllers/collegeController")
const interController=require("../Controllers/internController")




/////////////////////////////////////project2///////////////////////////////////

//router.post("/functionup/colleges")

router.post("/functionup/interns",interController.interCreation)

router.get("/functionup/collegeDetails",collegeController.getcollege)


module.exports=router;