const express = require("express")
const router = express.Router()
const employes = require("../models/employee.model")

router.get("/", async (req, res) => {
    try {
        const data = await employes.find()
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await employes.findById(req.params.id)
        res.json(data)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.post("/", async (req, res) => {
    const employee = new employes({
        fullname: req.body.fullname,
        email: req.body.email,
        mobileno: req.body.mobileno,
        city: req.body.city
    })
    try {
        const data1 = await employee.save()
        res.json(data1)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const data = await employes.findById(req.params.id)
        data.fullname = req.body.fullname
        data.email = req.body.email
        data.mobileno = req.body.mobileno
        data.city = req.body.city
        const response = await data.save()
        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const data = await employes.findById(req.params.id)
        const response = await data.remove()
        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }
})
module.exports = router