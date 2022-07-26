const mongoose = require("mongoose")

const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    account_no:{
        type: Number,
        require: true,
        unique: true
    },
    balance:{
        type: Number
    },
    fixedDeposit: {
        type: Boolean,
        default: false
    },
    bankname: {
        type: String,
        require: true,
    },
    address_of_person: {
        type: String
    },
    phoneno:{
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model("Employeesbankdetails", employeSchema)