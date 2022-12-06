import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudComponent } from '../addstud/addstud.component';
import { EditstudComponent } from '../editstud/editstud.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  
    { path:'home',component:HomeComponent,
 
    children:[
      
    { path:'add-post',component:AddstudComponent},
   { path:'edit-post/:id',component:EditstudComponent},
  ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
