import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddstudComponent } from '../addstud/addstud.component';
import { EditstudComponent } from '../editstud/editstud.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddstudComponent,
    EditstudComponent

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[HomeComponent],
})
export class StudentModule { }
