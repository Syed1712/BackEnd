import  express  from "express";
//const express=require("express")
const app=express();
import fs from "fs"
//const fs=require("fs")
import { MongoClient } from "mongodb";
//const { MongoClient } = require("mongodb");
//const ObjectId= require("mongodb").ObjectId;
import { ObjectId } from "mongodb";
const port=7000
import path from "path";
//const path=require("path")

 var ObjectId=Obj.ObjectId;

// fs.mkdirSync("NewFolder") //Create A New Folder

// __dirname represend --C:\Users\Admin\Desktop\BackEnd\
// express represend -- NewFolder

const Currentdir=path.join(__dirname,"NewFolder")    //set a path /like C:\Users\Admin\Desktop\BackEnd\NewFolder
console.log(Currentdir)



fs.writeFile(`${Currentdir}/Express.txt`,"HEY IAM A NEW FILE",(err)=>     // Writeing a File named Express.txt
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("FILE WRITED SUCESSFULLY")
    }
})


//Mongo Db Connection

const MONGO_URL =  "mongodb+srv://syed:Kifaya123@cluster0.iunyd6w.mongodb.net/"
async function createConnection()
{
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo DB CONNECted Successfully")
return client
}
const client=createConnection()


app.use(express.static("NewFolder"));   // Loading the Static File   //to define the folder
app.use(express.json())   // middle ware its tell server to use json
app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"NewFolder/Express.txt"))
})

// fs.unlinkSync("NewFolder/Express.txt",(err)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("File Deleted")
//     }
// })

const student=[
    {
        
    "Name" : "Syed",
    "Age" : 22,
    "Address" :"MADURAI",
    "Gender" :"Male"
},
{
    
    "Name" : "Thamana",
   "Age" : 33,
   "Address" :"Trichy",
   "Gender" :"Female"

},
{
   
   "Name" : "Samantha",
   "Age" : 35,
   "Address" :"Chennai", 
   "Gender" :"Female"

},
{
    
   "Name" : "Riya",
   "Age" : 27,
   "Address" :"MADURAI",
   "Gender" :"Female"

},
{
    
     "Name" : "SULTHAN",
    "Age" : 23,
    "Address" :"MADURAI",
    "Gender" :"Male"

},
{
   
    "Name" : "Yasin",
    "Age" : 24,
    "Address" :"MADURAI", 
    "Gender" :"Male"

},
{
    
    "Name" : "RIYAN",
    "Age" : 25,
    "Address" :"MADURAI",
    "Gender" :"Male"

}
]


//Parameter
// app.get("/students/:id",(req,res)=>
// {
//     const {id}=req.params;
//     console.log(id)
//     console.log(req.params)
//     const parameter=student.find((stu)=>stu.id===id);   // Find Returns Only Object One Value
// res.send(parameter)
// })

//Mongo DB Parameter
app.get("/students/:id", async (req,res)=>
{
    const {id}=req.params;
    const studentPara= await(await client)
    .db("Nodejs")
    .collection("stud")
    .findOne({_id : new ObjectId(id)})
    res.status(200).send(studentPara)
})

//Query
// app.get("/students",(req,res)=>
// {
//     const{Gender}=req.query
//     console.log(req.query)
//     const Query=student.filter((stud)=>stud.Gender==Gender)   // Filter returns ArrayofObject  Multiple Value
//     res.send(Query)

// })

//MongoDb Query

app.get("/students",async(req,res)=>
{
    //Query Condition
    if(req.query.Age)
    {
        req.query.Age=+req.query.Age
    }

    // Data Retrival From Database
 const allStudent= await(await client)
 .db("Nodejs")
 .collection("stud")
 .find(req.query)
 .toArray()
 res.send(allStudent)
})


// Post Method

// app.post("/Students",(req,res)=>
// {

//     const data =
//     {
//         id:req.body.id,
//         Name :req.body.Name,
//         Age : req.body.Age,
//         Address :req.body.Address,
//         Gender :req.body.Gender
//     }
//     student.push(data)
//     res.send(student)
    
// })

// Mongo DB Post Method

app.post("/students", async (req,res)=>
{
    const newData=req.body;
    const result=await(await client)
    .db("Nodejs")
    .collection("stud")
    .insertOne(newData)
    res.send(result)
})


app.get("/",(req,res)=>
{
    res.send("HELLO THIS IS YOUR RESPONSE")
})

// All Students
// app.get("/all/Students",(req,res)=>
// {
//     res.send(student)
// })


app.get("/all/Students",async (req,res)=>
{
 const allStudent= await(await client)
 .db("Nodejs")
 .collection("stud")
 .find()
 .toArray()
 res.send(allStudent)
})

//Put Method

// app.put("/students/:id",(req,res)=>
// {
//     const {id}=req.params
//     const editstud=student.find((stud)=>stud.id===id)
//     editstud.id=req.body.id,
//     editstud.Name=req.body.Name,
//     editstud.Age=req.body.Age,
//     editstud.Address=req.body.Address,
//     editstud.Gender=req.body.Gender,
//     res.send(student)

// })


//Mongo DB Put Method

app.put("/students/:id",async(req,res)=>
{
    const {id}=req.params
    const updateData=req.body
    const result=await(await client)
    .db("Nodejs")
    .collection("stud")
    .updateOne({_id: new ObjectId(id)},{$set:updateData})
res.send(result)
})


//Delete Method

// app.delete("/students/:id",(req,res)=>
// {
//     const {id}=req.params
//     const delstud=student.filter((stud)=>stud.id != id)
//     res.send(delstud)
// })


// Mongo DB Delete Method
app.delete("/students/:id", async(req,res)=>
{
    const {id}=req.params
    const result=await (await client)
    .db("Nodejs")
    .collection("stud")
    .deleteOne({_id : new ObjectId(id)})
    res.send(result)
})


// Insert Many
app.post("/students/many",async(req,res)=>
{
    const addmany=req.body;
    const result=await(await client)
    .db("Nodejs")
    .collection("stud")
    .insertMany(addmany)
    res.send(result)

})

// 1. Start  The Server
app.listen(port,()=>console.log("SERVER STARTED Locallhost"))