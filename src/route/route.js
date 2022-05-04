const express=require('express')
const router = express.Router()

const collegeController=require("../Controllers/collegeController")
const interController=require("../Controllers/internController")




/////////////////////////////////////project2///////////////////////////////////

////////////////////creation of college/////////////////////

router.post("/functionup/colleges",collegeController.collegeCreation)

////////////////////creation of intern////////////////////

router.post("/functionup/interns",interController.interCreation)

/////////////////fetch college intern/////////////////

 router.get("/functionup/collegeDetails",collegeController.getcollege)


module.exports=router;