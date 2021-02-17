import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-appoinment',
  templateUrl: './add-edit-appoinment.component.html',
  styleUrls: ['./add-edit-appoinment.component.css']
})
export class AddEditAppoinmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() appoinment:any;
  Id:String;
  FName:string;
  LName:string;
  Mobile:string;
  Email:string;
  City:string;
  Country:string;
  Model:string;
  Brand:string;
  LicencePlate:string;
  Status:string;
  StartDate:string;
  EndDate:string;
  TotalTime:string;
  TotalPrice:string;

  ngOnInit(): void {
  this.Id=this.appoinment.Id;
  this.FName=this.appoinment.FName;
  this.LName=this.appoinment.LName;
  this.Mobile=this.appoinment.Mobile;
  this.Email=this.appoinment.Email;
  this.City=this.appoinment.City;
  this.Country=this.appoinment.Country;
  this.Model=this.appoinment.Model;
  this.Brand=this.appoinment.Brand;
  this.LicencePlate=this.appoinment.LicencePlate;
  this.Status=this.appoinment.Status;
  this.StartDate=this.appoinment.StartDate;
  this.EndDate=this.appoinment.EndDate;
  this.TotalTime=this.appoinment.TotalTime;
  this.TotalPrice=this.appoinment.TotalPrice;

  }
addAppoinment(){
  var val={Id:this.Id,
          FName:this.FName,
          LName:this.LName,
          Mobile:this.Mobile,
          Email:this.Email,
          City:this.City,
          Country:this.Country,
          Model:this.Model,
          Brand:this.Brand,
          LicencePlate:this.LicencePlate,
          Status:this.Status,
          StartDate:this.EndDate,
          EndDate:this.EndDate,
          TotalTime:this.TotalTime,
          TotalPrice:this.TotalPrice};
          this.service.addAppoinment(val).subscribe(res=>{
            alert(res.toString());
          });
}
      editAppoinment(){
          var val={Id:this.Id,
            FName:this.FName,
            LName:this.LName,
            Mobile:this.Mobile,
            Email:this.Email,
            City:this.City,
            Country:this.Country,
            Model:this.Model,
            Brand:this.Brand,
            LicencePlate:this.LicencePlate,
            Status:this.Status,
            StartDate:this.EndDate,
            EndDate:this.EndDate,
            TotalTime:this.TotalTime,
            TotalPrice:this.TotalPrice};
            this.service.editAppoinment(val).subscribe(res=>{
            alert(res.toString());
                      });
          }
    }
