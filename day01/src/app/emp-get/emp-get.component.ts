import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-get',
  templateUrl: './emp-get.component.html',
  styleUrls: ['./emp-get.component.css']
})
export class EmpGetComponent implements OnInit {

  constructor(private route:ActivatedRoute,private empService:EmployeeService) { }
  employees:Employee[];
  ngOnInit() {
    
    console.log("EMPLOYEELIST "+this.employees);
    this.empService.getEmployees()
    .subscribe(list=>
      this.employees=list);
  }

}
