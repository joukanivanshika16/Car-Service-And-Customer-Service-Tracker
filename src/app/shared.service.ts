import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
<<<<<<< HEAD
import {Observable} from 'rxjs';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
import { AddEditVehicleComponent } from './vehicle/add-edit-vehicle/add-edit-vehicle.component';
=======

>>>>>>> f31077d70207e8e98f40879a7c0834d1224e30c8
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44370/api"

  constructor(private http:HttpClient ) { }

getAppointmentList()
{
  return this.http.get<any>(this.APIUrl+'/Appointment/allAppointments');
}
addAppoinment(val:any){
return this.http.post(this.APIUrl+'/Appoinment/CreateAppoinments',val);
}
editAppoinment(val:any){
return this.http.put(this.APIUrl+'/Appoinment/UpdateAppoinments',val);
}
deleteAppoinment(id:any){
  return this.http.delete(this.APIUrl+'/Appoinment/DeleteAppoinments/'+id);
}
getCustomerList()
{
  return this.http.get<any>(this.APIUrl+'/Customer/allCustomers');
}
addCustomer(val:any){
return this.http.post(this.APIUrl+'/customer',val);
}
editCustomer(val:any){
return this.http.put(this.APIUrl+'/customer',val);
}
deleteCustomer(id:any){
  return this.http.delete(this.APIUrl+'/customer/'+id);
}

getVehicleList()
{
  return this.http.get<any>(this.APIUrl+'/Vehicle/allVehicles');
}
addVehicle(val:any){
return this.http.post(this.APIUrl+'/vehicle',val);
}
editVehicle(val:any){
return this.http.put(this.APIUrl+'/vehicle',val);
}
deleteVehicle(id:any){
  return this.http.delete(this.APIUrl+'/vehicle/'+id);
}
}
