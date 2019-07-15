const express = require('express');
const app = express();
const employeeRoutes = express.Router();
// Require Business model in our routes module
let Employee = require('./employee');
// Defined store route
employeeRoutes.route('/add').post(function (req, res) {
  let employee = new Employee(req.body);///{empId:9010,empName:"adf",designation:"asd"};
  console.log("Employee.route.js : Employee : "+employee);
  employee.save()
    .then(employee => {
      res.status(200).json({'employee': 'employee in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
employeeRoutes.route('/allemp').get(function (req, res) {
  console.log("/employees called "); 
  Employee.find(function (err, employee){
    if(err){
      console.log(err);
    }
    else {
      console.log(employee);
      res.json(employee);
    }
  });
});

// Defined delete data
employeeRoutes.route('/delete/:empId').get(function (req, res) {
  console.log("/employees called "); 
  Employee.findOneAndDelete({empId:req.params.empId},function (err, employee){
    if(err){
      console.log(err);
    }
    else {
      console.log(employee);
      res.send(empId+"removed");
    }
  });
});

module.exports=employeeRoutes;