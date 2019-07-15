import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './employee/emp-add/emp-add.component';
import { EmpGetComponent } from './employee/emp-get/emp-get.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { EmployeeDeleteComponent } from './employee/emp-delete/emp-delete.component';
import { EmpUpdateComponent } from './employee/emp-update/emp-update.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpAddComponent,
    EmployeeDeleteComponent,
    EmpUpdateComponent,
    EmpGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
