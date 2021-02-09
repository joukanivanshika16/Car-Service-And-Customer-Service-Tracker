import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppoinmentComponent} from './appoinment/appoinment.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'appoinment',component:AppoinmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
