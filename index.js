const express=require("express");
const app=express();
const axios = require("axios");
const fs =require("fs/promises");
const {parse, stringify} = require('flatted');
const data2 = require("./data2.json")


const PORT=5000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("welcome to 4 assignment")
})

app.get("/create-json",async(req,res)=>{
    try{
        const data = await axios.get("https://jsonplaceholder.typicode.com/users")
        const datafile = stringify(data)
        console.log(datafile.json)
        fs.writeFile("data.json",datafile,"utf8")
        console.log("file created ....")
        res.status(200).send(datafile)
    }
    catch(error){
        console.log(error)
    }
})

app.get("/get_alldata",(req,res)=>{
    res.send(data2)
})


app.listen(5000,()=>console.log(`server sunn raha hai ...${PORT}`))
