const express=require("express")
const router=express.Router()
const Employee=require("../models/bankdetails.model")

router.get("/",(req,res)=>{
    res.status(200).send(`welcome to the bank 	${"\uD83D\uDE00"}`)
})

router.get("/employeesdetails", async (req, res) => {
    try {
        const data = await Employee.find()
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.get("/fixedDeposit",async(req,res)=>{
    try{
        const FD =await Employee.find({fixedDeposit:false})
        console.log(FD)
        res.json(FD)
    }catch(err){
        console.log(err)
        res.send("error"+err)
    }
})

router.get("/ltgt",async(req,res)=>{
    try{
        const ltgt =await Employee.find({balance:{$gt:80000,$lt:100000}})
        console.log(ltgt)
        res.json(ltgt)
    }catch(err){
        console.log(err)
        res.send("error"+err)
    }
})


router.get("/bankname",async(req,res)=>{
    try{
        const bankName =await Employee.find({bankname:"HSBC"})
        console.log(bankName)
        res.json(bankName)
    }catch(err){
        console.log(err)
        res.send("error"+err)
    }
})

router.get("/skip",async(req,res)=>{
    try{
        const skip =await Employee.find().skip(5)
        console.log(skip)
        res.json(skip)
    }catch(err){
        console.log(err)
        res.send("error"+err)
    }
})

router.get("/sort",async(req,res)=>{
    try{
        const sort =await Employee.find().sort({"name":1})
        console.log(sort)
        res.json(sort)
    }catch(err){
        console.log(err)
        res.send("error"+err)
    }
})



router.get("/:id", async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id)
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.post("/employeesdetails", async (req, res) => {
    const details = new Employee({
        name: req.body.name,
        account_no: req.body.account_no,
        balance: req.body.balance,
        fixedDeposit: req.body.fixedDeposit,
        bankname: req.body.bankname,
        address_of_person:req.body.address_of_person,
        phoneno: req.body.phoneno
    })
    try {
        const data1 = await details.save()
        res.json(data1)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id)
        data.name=req.body.name,
        data.balance= req.body.balance,
        data.fixedDeposit= req.body.fixedDeposit,
        data.bankname= req.body.bankname,
        data.address_of_person=req.body.address_of_person

        const response = await data.save()
        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }
})


router.delete("/remove", async (req, res) => {
    try {
        const data = await Employee.deleteOne({balance:{$lt:7000}})
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
})


module.exports=router

