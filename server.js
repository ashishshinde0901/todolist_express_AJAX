const express = require("express")
const app = express()
const todoRoute = require("./routes/todo")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/public',express.static(__dirname+"/public"))
app.use('/todos',todoRoute)

app.listen(4445,()=>{
    console.log("server started on http://localhost:4445")
})