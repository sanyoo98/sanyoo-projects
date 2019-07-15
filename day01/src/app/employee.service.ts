import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  uri = 'http://localhost:4000/employee';
  constructor(private http:HttpClient) { }
 getEmployees():Observable<Employee[]>{
    console.log('service.getEmployees() called');
    return this.http.
    get<Employee[]>('http://localhost:4000/employee/allemp');
    ;
 }
  addEmployee(empId, empName, designation) {
    const obj = {
      empId:empId,
    empName:empName,
    designation:designation,
    };
    console.log(obj);
    this.http.post('http://localhost:4000/employee/add', obj)
        .subscribe(res => console.log('Done'));
  }
  deleteEmployee(empId){
    this.http.delete('http://localhost:4000/employee/delete/'+empId)
        .subscribe(res => console.log('Done'));
  }
}
