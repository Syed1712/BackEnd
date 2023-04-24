//Parameter

app.get("/students/:id",(req,res)=>
{
    const {id}=req.params;
    console.log(id)
    console.log(req.params)
    const parameter=student.find((stu)=>stu.id===id);   // Find Returns Only Object One Value
res.send(parameter)
})



//Query

app.get("/students",(req,res)=>
{
    const{Gender}=req.query
    console.log(req.query)
    const Query=student.filter((stud)=>stud.Gender==Gender)   // Filter returns ArrayofObject  Multiple Value
    res.send(Query)

})


// Post Method

app.post("/Students",(req,res)=>
{

    const data =
    {
        id:req.body.id,
        Name :req.body.Name,
        Age : req.body.Age,
        Address :req.body.Address,
        Gender :req.body.Gender
    }
    student.push(data)
    res.send(student)
    
})

//Put Method

app.put("/students/:id",(req,res)=>
{
    const {id}=req.params
    const editstud=student.find((stud)=>stud.id===id)
    editstud.id=req.body.id,
    editstud.Name=req.body.Name,
    editstud.Age=req.body.Age,
    editstud.Address=req.body.Address,
    editstud.Gender=req.body.Gender,
    res.send(student)

})



//Delete Method

app.delete("/students/:id",(req,res)=>
{
    const {id}=req.params
    const delstud=student.filter((stud)=>stud.id != id)
    res.send(delstud)
})

// All Students

app.get("/all/Students",(req,res)=>
{
    res.send(student)
})