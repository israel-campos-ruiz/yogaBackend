import { gql } from 'apollo-server';

export const InputClase = gql`
    input InputClase{
        nombre:String!
        img:String
        descripcion:String
        nombreProfesor:String
    }
`