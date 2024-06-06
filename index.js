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
     const filepath=`Timestamp/${today}.txt`
     fs.writeFileSync(filepath,`${today}`,'utf8')
     let data=fs.readFileSync(filepath,'utf8')
     res.status(200).json({currenttime:data})  
})
app.get('/all-time', (req, res) => {
    const __Timestamp = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__Timestamp);
    const timestampDir = path.join(__dirname, 'Timestamp');
    const allFiles = fs.readdirSync(timestampDir, 'utf8');
    const allContents = allFiles.map((filename) => {
        const filePath = path.join(timestampDir, filename);
        return fs.readFileSync(filePath, 'utf8');
    });
    res.status(200).json({allTimestamp:allContents});
});

app.listen(PORT,()=>{
    console.log("node is listining");
})

