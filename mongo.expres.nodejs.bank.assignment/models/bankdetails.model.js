const mongoose = require("mongoose")

const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
        min: 2,
        validate(value) {
            if (value.length < 2) {
                throw new Error(" Name should be greater than 2 words  ");
            }
        }
    },
    account_no: {
        type: Number,
        require: true,
        unique: true,
        min: 7,
        validate(num) {
            if (num.length < 5) {
                throw new Error(" Account_no should be greater than 7 digits  ");
            }
        }
    },
    balance: {
        type: Number,
        min: 1000,
        validate(val) {
            if (val.length < 1000) {
                throw new error(" Account balance should be greater than zero  ");
            }
        }
    },
    fixedDeposit: {
        type: Boolean,
        default: false
    },
    bankname: {
        type: String,
        require: true,
        uppercase: true
    },
    address_of_person: {
        type: String,
    },
    phoneno: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model("Employeesbankdetails", employeSchema)