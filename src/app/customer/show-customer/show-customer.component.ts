import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle!:string;
  ActivateAddEditCustomerComp:boolean=true;
  customer:any;
  ngOnInit(): void {
    this.refreshCustomerList();
  }
  addClick(){
    this.customer={
      Id:0
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustomerComp=true;
  }
  editClick(item:any){
    this.customer=item
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustomerComp=true;
  }
  closeClick(){
    this.ActivateAddEditCustomerComp=false;
    this.refreshCustomerList();
  }
  deleteClick(item:any){
    if(confirm('Are You Sure?')){
      this.service.deleteCustomer(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshCustomerList();
      });
    }
  }

  
  refreshCustomerList(){
    this.service.getCustomerList().subscribe(data=>{
   
    this.CustomerList=data;
        }
      );
      }
}
