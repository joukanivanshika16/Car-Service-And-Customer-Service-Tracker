import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  @Input() vehicle:any;
  ngOnInit(): void {
  }

} 
