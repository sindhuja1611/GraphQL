import { Component, OnInit } from '@angular/core';
import { Stud } from '../student/stud';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { CREATE_Students } from '../student/gql/student-mutation';
import { Router } from '@angular/router';
import { GET_Students } from '../student/gql/student-query';
@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {
  title:string = 'jos';
  constructor(private app:Apollo,private router:Router) { }

  studForm:Stud={
    id:0,
    Name:'',
    Age:0,
    Gender:''
 }

  ngOnInit(): void {
    
  }

  create()
  {
    console.log(this.studForm);
    this.app.mutate<{createStudent:Stud}>(
    {
    
      mutation:CREATE_Students,
      variables:{
        Name:this.studForm.Name,
        
        Age:this.studForm.Age,
        Gender:this.studForm.Gender,
      },
    //   update:(store,{data})=>{
    //     if(data?.createStudent){
    //       var allData = store.readQuery<{allStudents:Stud[]}>({query: GET_Students});
    //       if(allData && allData?.allStudents.length > 0){
    //         var newData:Stud[]=[...allData.allStudents];
    //         newData.unshift(data.createStudent);
    //       store.writeQuery<{allStudents:Stud[]}>({query: GET_Students,data:{allStudents:newData}});
    //       }
    //     }
    //   }
    }).subscribe(({data})=>{
this.router.navigate(["/home"]);
    })
    } 
  }


