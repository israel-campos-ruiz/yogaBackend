import { gql } from "apollo-server";

export const mutationClase = gql`
    type Mutation{
        createClass(input:InputClase): Clase
        updateClass(id:ID, input:InputClase):Clase
        deleteClass(id:ID):String
       
    }

`;
