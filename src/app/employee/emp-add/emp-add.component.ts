import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpServiceService } from 'src/app/service/employee.service';
// import { EmployeeService } from '/src/app/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb:FormBuilder, private empService:EmpServiceService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      empId:['',Validators.required],
      empName:['',Validators.required],
      designation:['',Validators.required]
    });
  }

  addEmployee(empId,empName,designation){
    this.empService.addEmployee(empId,empName,designation);
  }

}

