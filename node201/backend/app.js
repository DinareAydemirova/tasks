import exppress from 'express'
import 'dotenv/config'
import fs from 'fs'


const app=exppress()
const PORT = process.env.PORT || 3001


app.get("/", (req, res)=>{
    res.send(readDatabase())
})

app.delete("/:id" ,(req, res)=>{
// console.log(req.params.id);
let findElem=students     .find((elem)=>elem.id!=req.params.id)
res.send(findElem)
})
const readDatabase=()=>{
    try{
        const data=fs.readFileSync("./db.json");
        const students= JSON.parse(data)
        return students
    }catch(error){
        console.log("File not working", error);
        return {students:[]}
    }
}

app.listen(PORT,()=>{
    console.log(`SERVER LISTEN ${PORT}`);
})


