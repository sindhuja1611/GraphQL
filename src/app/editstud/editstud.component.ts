import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_Students, UPDATE_stud } from '../student/gql/student-mutation';
import { GET_Students, studById } from '../student/gql/student-query';
import { Stud } from '../student/stud';

@Component({
  selector: 'app-editstud',
  templateUrl: './editstud.component.html',
  styleUrls: ['./editstud.component.css']
})
export class EditstudComponent implements OnInit {

  constructor(private app:Apollo,private route:ActivatedRoute,private router:Router) { }
  studForm:Stud={
    id:0,
    Name:'',
    Age:0,
    Gender:''
 }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      var id=Number(params.get('id'));
      this.update(id);
    });


  }

update(id:number)
{
this.app
.watchQuery<{allStudents:Stud[]}>({
  query:studById,
  variables:{
    stud:{id}
  },
})
.valueChanges
.subscribe(({data})=>{
  var student=data.allStudents[0];
  this.studForm={
id:student.id,
Name:student.Name,
Age:student.Age,
Gender:student.Gender,
  };
})
}

updateStud()
{
  this.app.mutate<{updateStudent:Stud}>(
    {
    
      mutation:UPDATE_stud ,
      variables:{
        id:this.studForm.id,
        Name:this.studForm.Name,
        
        Age:this.studForm.Age,
        Gender:this.studForm.Gender,
      },
      update:(store,{data})=>{
        if(data?.updateStudent){
          var allData = store.readQuery<{allStudents:Stud[]}>({query: GET_Students});
          if(allData && allData?.allStudents.length > 0){
            var newData:Stud[]=[...allData.allStudents];
            newData = newData.filter(res=>res.id !== data.updateStudent.id);
            newData.unshift(data.updateStudent);
          store.writeQuery<{allStudents:Stud[]}>({query: GET_Students,data:{allStudents:newData}});
          }
        }
      }
    }).subscribe(({data})=>{
this.router.navigate(["/home"]);
    })

}
}

