import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmpServiceService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit ,OnDestroy{
  @Input()
  employee:Employee;
  
  constructor(private route:ActivatedRoute,private service:EmpServiceService) { }

  ngOnInit() {
     }
 
     updateEmployee(id:any,desig:any){
    this.service.updateEmployee(id,desig);
  }

}