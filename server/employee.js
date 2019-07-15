//step01: include your mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//step02:create a collection using schema
//mongoose allows us to work with collection of an object 
//it acts as an ORM
//new schema({attributes in document},{name of collection})
var Employee=new Schema({
    empId:{type:Number},
    empName:{type:String},
    designation:{type:String}
},{
    collection:'employee'
});
//to access your document  created in mongod as an object we call mongoose.model('Employee',Employee);
//model(name of module to be exported,module which represents document in mongo)
module.exports=mongoose.model("Employee",Employee);