import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { Delete_stud } from '../gql/student-mutation';
import { GET_Students } from '../gql/student-query';
import { Stud } from '../stud';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private app:Apollo,private router:Router) { }
 allStudents$:Observable<Stud[]> = of([])
idToDelete:number=0;

  ngOnInit(): void {
    
this.allStudents$=this.app
.watchQuery<{allStudents:Stud[]}>({query:GET_Students,fetchPolicy:'no-cache'})
.valueChanges.pipe(map((result)=>result.data.allStudents))

  }
 

  delete(id:number){
   this.idToDelete=id;
    this.app.mutate<{removeStudent:Stud}>(
    {
    
      mutation:Delete_stud,
      variables:{
       id:this.idToDelete
      },
      update:(store,{data})=>{
        if(data?.removeStudent){
          var allData = store.readQuery<{allStudents:Stud[]}>({query: GET_Students});
          if(allData && allData?.allStudents.length > 0){
            var newData:Stud[]=[...allData.allStudents];
           newData=newData.filter(res=>res.id !== data.removeStudent.id);
          store.writeQuery<{allStudents:Stud[]}>({query: GET_Students,data:{allStudents:newData}});
          }
        }
      }
    }).subscribe(({data})=>{
this.ngOnInit();
    })
    } 
  

}
