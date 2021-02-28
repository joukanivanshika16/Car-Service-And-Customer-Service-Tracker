import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent implements OnInit {

  constructor(private service:SharedService) { }

 
  VehicleList:any=[];

  ModalTitle!:string;
  ActivateAddEditVehicleComp:boolean=true;
  vehicle:any;

  ngOnInit(): void {
    this.refreshVehicleList();
  }
  addClick(){
    this.vehicle={
      Id:0,
      Description:"",
      Brand:"",
      LicencePlate:"",
      Model:"",
      RegDate:"",
      Country:"",
      Weight:"",
      MCHCode:"",
      Vin:"",
      EngNo:"",
      Colour:"",
    }
    this.ModalTitle="Add Vehicle";
    this.ActivateAddEditVehicleComp=true;

  }
  editClick(item:any){
    this.vehicle=item
    this.ModalTitle="Edit Vehicle";
    this.ActivateAddEditVehicleComp=true;
  }
  closeClick(){
    this.ActivateAddEditVehicleComp=false;
    this.refreshVehicleList();
  }

  deleteClick(item:any){
    if(confirm('Are You Sure?')){
      this.service.deleteVehicle(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshVehicleList();
      });
    }

  }
refreshVehicleList(){
  this.service.getVehicleList().subscribe(data=>{
  this.VehicleList=data;
      }
    );
  }
}