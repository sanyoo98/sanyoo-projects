//step01:include all modules
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const apiEmpRouter=require('./server/api-employee.route');
const app=express();
const path=require('path');
//step02:configiration of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("Database is connected"),
    (err)=>console.log("Database is not connected")
);

//step03:handling app static resource and api call
app.use(bodyparser.json());//json handling
app.use(cors());
//public : folder which contains all stattic resources
//.html,.jpg,.css,.js===we will keep in one folder called public
app.use(express.static(path.join(__dirname,'public')));
//when server will start it will display below message
app.get('/',(req,resp)=>{
  //  resp.send("welcome to express");
  resp.sendFile("index.html");
 });
 //to call 
 app.use('/emp',apiEmpRouter);
//step04:strating the server
app.listen(4000,()=>{console.log("server is listening at 4000")});
