import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
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
return this.http.post(this.APIUrl+'/appoinment',val);
}
editAppoinment(val:any){
return this.http.put(this.APIUrl+'/appoinment',val);
}
deleteAppoinment(id:any){
  return this.http.delete(this.APIUrl+'/appoinment/'+id);
}
getCustomerList()
{
  return this.http.get<any>(this.APIUrl+'/Appointment/allAppointments');
}
addCustomer(val:any){
return this.http.post(this.APIUrl+'/appoinment',val);
}
editCustomer(val:any){
return this.http.put(this.APIUrl+'/appoinment',val);
}
deleteCustomer(id:any){
  return this.http.delete(this.APIUrl+'/appoinment/'+id);
}
}
