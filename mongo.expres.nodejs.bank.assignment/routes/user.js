const express = require("express")
const router = express.Router()
const Employee = require("../models/bankdetails.model")
const {welcome,alluser,finduser,balrangeuser,userid,newuser,updateuser,deleteuser,userbalance,namesearch} =require("../controller/user")

// welcome route 

router.get("/",welcome)

// this below will give data with the pagination concept having a page and limit

router.get("/employeesdetails",alluser)

// find employee provide the data according to bankname ,fixedDeposit,limit,sorting is done according to name
router.get("/findemployee/",finduser)

// employee having balance in range (lt=less than ,gt=greater than ) 
router.get("/balancerange", balrangeuser)

// this route will give the customer name with the balance using the aggreagate functions 

router.get("/userbalance",userbalance)
// this route will show the data according to id 

router.get("/:id",userid)

// this route will give the data according to name you search also applied the regex concept 

router.get("/getbyname/:key",namesearch)
// this below route is used to post the data according to the schema 

router.post("/employeesdetails", newuser)

// below route will find the data according to id and update the parameters 

router.patch("/:id", updateuser)

// this route will delete the data according to the id & if balance is less than the given balance by the user 

router.delete("/removebyid", deleteuser)




module.exports = router

