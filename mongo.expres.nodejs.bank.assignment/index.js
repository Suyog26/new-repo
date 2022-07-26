const express= require("express")
const app =express()
const mongoose =require("mongoose")
const router=require("./routes/user")

mongoose.connect("mongodb://localhost:27017/bankDB", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("mongodb connection successful")
    }
    else {
        console.log("error in connection: " + err)
    }
})

app.use(express.json())
app.use("/bankdata",router)

app.listen(5000,()=>console.log("server is listening ....."))