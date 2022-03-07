const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const app=express()
const cors=require('cors')
// const dbconnect=require('./dbconnection/connection')
mongoose.connect('mongodb+srv://user_bhagitha:Bhagitha9072%40@mycluster.74kgk.azure.mongodb.net/DBSethulakshmiEcommerce?retryWrites=true&w=majority',()=>{
    console.log('db Connected !!')
})
const router=require('./src/routers/router')
const PORT=process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join( __dirname,"./build")))

app.use('/api',router);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/build/index.html'))
})

app.listen(PORT,()=>{
    console.log("server started at http://localhost:5000")
})