//
const express=require('express');
const app=express();
//we are creating api-link for employee
const apiEmpRouter=express.Router();
//we are importring employee schema
let Employee=require('./employee');
//get all employee
apiEmpRouter.route('/allEmp').get((req,resp)=>{
   // resp.send("<h1>Called All Emp</h1>");
    //1.get data from mongo db
    Employee.find((err,data)=>{
        if(err){
            resp.send("Failure");
        }
        resp.send(data);
    });
});
//get emplolyee by empId
apiEmpRouter.route('/:empId').get((req,resp)=>{
   // resp.send("<h1>Called get by EmpId</h1>");
    let p_empId=req.params.empId;
    Employee.find({empId:p_empId},(err,data)=>{
        if(err) {resp.send("Failed to load data for:"+p_empId);}
        resp.send(data);
    });
});
//get emplolyee by empName
apiEmpRouter.route('/ename/:empName').get((req,resp)=>{
   // resp.send("<h1>Called get by EmpName</h1>");
   let p_empName=req.params.empName;
    Employee.find({empName:p_empName},(err,data)=>{
        if(err) {resp.send("Failed to load data for:"+p_empName);}
        resp.send(data);
    });
});
//add employee
apiEmpRouter.route('/addEmp').post((req,resp)=>{
    let body_employee=new Employee(req.body);
   body_employee.save().then(
                                ()=>resp.send("New Employee added to database"),
                                (err)=>resp.send("Failed while adding employee details!! ")
   );
    // +employee.empId+"<br/>"
    // +employee.empName+"<br/>"
    // +employee.designation+"<br/>";
    //resp.send(employee);
});
//delete employee
apiEmpRouter.route('/delete/:empId').delete((req,resp)=>{
    //resp.send("<h1>Called delete by EmpId</h1>");
    let s_empId=req.params.empId;
    Employee.findOneAndDelete({empId:s_empId},(err,data)=>{
        if(err)resp.send("No Records found!!!");
        resp.send(data+"deleted records");
    });
});
//update.employee
apiEmpRouter.route('/update/:empId/:desig').put((req,resp)=>{
    //resp.send("<h1>Called update by EmpId</h1>");
    let o_empId=req.params.empId;
    let o_desig=req.params.desig;
    Employee.findOneAndUpdate({empId:o_empId},{designation:o_desig},(err,data)=>{
    if(err) resp.send("Failed to update!!!");
    resp.send("Updated records for" + o_empId + "as" + o_desig);
});
    
});
module.exports=apiEmpRouter;