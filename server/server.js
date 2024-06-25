const express=require("express")
const app=express()
const cors=require("cors")

app.use(cors({credentials: true,origin: 'http://localhost:5173',}));
app.use(express.json(),express.urlencoded({extended:true}))

require('dotenv').config()
const port=process.env.port

require("./config/server.config")   
require("./routes/image.routes")(app)
app.listen(port ,()=> console.log (`listen on port ${port}`))