import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { ShowAppoinmentComponent } from './appoinment/show-appoinment/show-appoinment.component';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { HomeComponent } from './home/home.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ShowVehicleComponent } from './vehicle/show-vehicle/show-vehicle.component';
import { AddEditVehicleComponent } from './vehicle/add-edit-vehicle/add-edit-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    AppoinmentComponent,
    ShowAppoinmentComponent,
    AddEditAppoinmentComponent,
    HomeComponent,
    CustomerComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent,
    VehicleComponent,
    ShowVehicleComponent,
    AddEditVehicleComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MDBBootstrapModule.forRoot()
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
