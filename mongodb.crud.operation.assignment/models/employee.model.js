const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    mobileno: {
        type: String
    },
    city: {
        type: String
    }
})

module.exports = mongoose.model("Employee", employeeSchema)