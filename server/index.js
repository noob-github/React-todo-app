const express  = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT||5000
app.use(express.json())
app.use(express.static(path.join(__dirname,"../client/build/index.html")))
app.get("*",(req,res)=>{
    res.sendFile(staticFilePath)
})
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})

