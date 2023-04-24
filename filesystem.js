const fs=require("fs"); // or     //import fs from "fs"  //const fs=require("fs")


const[,,num1,num2,text,path]=process.argv    // give the value in aruguments
const sum=(n1,n2)=> n1+n2
console.log(sum(+num1,+num2))
const welcome=(msg)=>
{
    console.log(`Hi ${msg} Welcome to BackEnd`)
}
welcome(text)

//Read a File
fs.readFile(path,"utf-8",(err,data)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data)
    }
    
})

// Write a File

fs.writeFile("./writefile.txt","Hi I am a Writing File Hahaha",(err)=>
{
if(err)
{
    console.log(err)
}
else{
    console.log("File Created Successfully")
}
}
)


// Update a File   // it update the new value not change the values

fs.appendFile("./writefile.txt","\n Hey Iam Updating Something Else....",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("File Updated Successfully")
    }   
})



//Delete

fs.unlink("./writefile.txt",(err)=>{
    if(err)
{
    console.log(err)
}
else{
    console.log("File Deleted Successfully")
}
})



// Date Function

let time=Date.now()
console.log(time)
let date=new Date()
console.log(date)
let utc=date.toUTCString()
console.log(utc)






// Create A New Folder
 fs.mkdirSync("New Folder")



// Create a File Inside tge Folder
 fs.writeFileSync("New Folder/create1.txt","Hiii")



//REname The Folder or file Name
 fs.renameSync("New Folder/create1.txt","New Folder/CreateOne.txt")


//Delete the File
fs.unlinkSync("New Folder/CreateOne.txt");


// Write a file using command line arguments

const [,,path1]=process.argv


    fs.writeFile(path1,"HIII",(data)=>
    {
        if(data)
        {
            console.log(data)
        }
        else{
            console.log("Create a File")
        }
    })


//Delete the File

    fs.unlinkSync(path1)


//Create A New Folder

fs.mkdirSync("NewFolder") 

// __dirname represend --C:\Users\Admin\Desktop\BackEnd\
// express represend -- NewFolder

const Currentdir=path.join(__dirname,"NewFolder")    //set a path /like C:\Users\Admin\Desktop\BackEnd\NewFolder
console.log(Currentdir)


// Writeing a File named Express.txt

fs.writeFile(`${Currentdir}/Express.txt`,"HEY IAM A NEW FILE",(err)=>     
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("FILE WRITED SUCESSFULLY")
    }
})




//Delete the File NAmed NewFolder inside the Express.txt

fs.unlinkSync("NewFolder/Express.txt",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("File Deleted")
    }
})
