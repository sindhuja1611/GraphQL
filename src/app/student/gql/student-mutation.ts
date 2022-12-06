import { gql } from "apollo-angular";

export const CREATE_Students = gql `
    mutation ($Name: String!, $Age: Int!, $Gender: String!) {
        createStudent(Name: $Name, Age: $Age, Gender: $Gender) {
          id
          Name
          Age
          Gender
        }
      }
      
  `;

  export const UPDATE_stud =gql `
  mutation ($id:ID!,$Name: String!, $Age: Int!, $Gender: String!) {
    updateStudent(id:$id,Name: $Name, Age: $Age, Gender: $Gender) {
      id
      Name
      Age
      Gender
    }
  }
  `
  export const Delete_stud =gql `
  mutation ($id:ID!) {
    removeStudent(id:$id) {
      id
     
    }
  }
  `
