
const express= require("express")
const mongoose=require("mongoose")
const app =express()
const employeerouter=require("./routers/employess")


mongoose.connect("mongodb://localhost:27017/EmployessDB", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("mongodb connection succesful")
    }
    else {
        console.log("error in connection: " + err)
    }
})
app.use(express.json())
app.use("/employees",employeerouter)

app.listen(5000,()=>console.log("server is sunn raha hai ..."))