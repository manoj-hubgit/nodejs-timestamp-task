import express from "express";
import fs from "fs";
import path from "path";
import { format } from "date-fns";
import { fileURLToPath } from "url";

const app=express();
const PORT=4000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("Use /current-time end point to know the current time. Use /all-time to retrive all time")
})

app.get('/current-time',(req,res)=>{
     let today=format(new Date(),'dd-mm-yyyy-HH-mm-ss')
     const filepath=`Timestamp/${today}.text`
     fs.writeFileSync(filepath,`${today}`,'utf8')
     let data=fs.readFileSync(filepath,'utf8')
     res.status(200).json(data)  
})
app.get('/all-time',(req,res) => {
    const __Timestamp =fileURLToPath(import.meta.url)
   const __dirname=path.dirname(__Timestamp)
    const all = path.join(__dirname, 'Timestamp');
    const alldata = fs.readdirSync(all,'utf8');
    res.status(200).json(alldata);
    
});

app.listen(PORT,()=>{
    console.log("node is listining");
})

