import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentModule } from './student/student.module';

const routes: Routes = [{
  path:'',
  loadChildren:()=>import('./student/student.module').then(res=>res.StudentModule)
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
