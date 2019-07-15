import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpGetComponent } from './emp-get/emp-get.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpAddComponent,
    EmpGetComponent,
    EmpEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
