import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-appoinment',
  templateUrl: './show-appoinment.component.html',
  styleUrls: ['./show-appoinment.component.css']
})
export class ShowAppoinmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  AppointmentList:any=[];

  ModalTitle!:string;
  ActivateAddEditAppoinmentComp:boolean=true;
  appoinment:any;

  ngOnInit(): void {
    this.refreshAppoinmentList();
  }
  addClick(){
    this.appoinment={
      ID:0
    }
    this.ModalTitle="Add Appoinment";
    this.ActivateAddEditAppoinmentComp=true;

  }
  editClick(){
    this.ModalTitle="Edit Appoinment";
    this.ActivateAddEditAppoinmentComp=true;
  }
  closeClick(){
    this.ActivateAddEditAppoinmentComp=false;
    this.refreshAppoinmentList();
  }

refreshAppoinmentList(){
  this.service.getAppointmentList().subscribe(data=>{
    debugger;
  this.AppointmentList=data;
      }
    );
  }
}
