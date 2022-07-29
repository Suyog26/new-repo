const Employee = require("../models/bankdetails.model")

const welcome = async(req, res)=> {
    await res.status(200).send(`welcome to the bank ${"\uD83D\uDE00"}`)
}

const alluser =async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query
        const data = await Employee.find().limit(limit * 1).skip((page - 1) * limit)
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
}

const finduser=async (req, res) => {
    try {
        const { fD, bankName, Limit ,Name} = req.query
        const User = await Employee.find({ fixedDeposit:fD,bankname:bankName, limit:Limit,name:Name}).sort({ "name": 1 })
        res.json(User)
    } catch (err) {
        console.log(err)
        res.send("error" + err)
    }
}

const balrangeuser =async (req, res) => {
    try {
        const { $gt = 80000, $lt = 100000 } = req.query
        const ltgt = await Employee.find({ balance: { $gt: $gt, $lt: $lt } })
        console.log(ltgt)
        res.json(ltgt)
    } catch (err) {
        console.log(err)
        res.send("error" + err)
    }
}

const userid =async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id)
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
}

const newuser =async (req, res) => {
    const { name, account_no, balance, fixedDeposit, bankname, address_of_person, phoneno } = req.body
    const details = new Employee({ name, account_no, balance, fixedDeposit, bankname, address_of_person, phoneno })
    try {
        const data1 = await details.save()
        res.json(data1)
    } catch (err) {
        res.send("Error" + err)
    }
}

const updateuser=async (req, res) => {
    try {
        const { id } = req.params
        const { name, balance, fixedDeposit, bankname, address_of_person } = req.body
        const data = await Employee.findOneAndUpdate({ id }, { name, balance, fixedDeposit, bankname, address_of_person })
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
}

const deleteuser =async (req, res) => {
    try {
        const { $lt, id } = req.query
        const data = await Employee.deleteOne({ balance: { $lt: $lt } }, { id })
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
}

module.exports= { welcome,alluser,finduser,balrangeuser,userid,newuser,updateuser,deleteuser }