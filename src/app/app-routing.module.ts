import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpAddComponent } from './employee/emp-add/emp-add.component';
import { EmployeeDeleteComponent } from './employee/emp-delete/emp-delete.component';
import { EmpUpdateComponent } from './employee/emp-update/emp-update.component';


const routes: Routes = [
{path:'emp/create', component:EmpAddComponent},
{path:'emp/delete/:empId',component:EmployeeDeleteComponent},
{path:'emp/update/:empid',component:EmpUpdateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
