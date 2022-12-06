import { gql } from "apollo-angular";

export const GET_Students = gql `query{
    allStudents{
      id
      Name
      Age
      Gender
    }
  }
  `;

  export const studById = gql `
  query($stud:StudentFilter){
    allStudents(filter:$stud){
      id
      Name
      Age
      Gender
    }
  }
  `;
