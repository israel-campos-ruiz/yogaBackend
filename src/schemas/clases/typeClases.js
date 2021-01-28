import { gql } from 'apollo-server';

export const TypeClase = gql`
    type Clase{
        _id:ID
        nombre:String!
        img:String
        descripcion:String
        nombreProfesor:String

    }

    type DeleteClase{
        clase:Clase,
        mensaje:String
    }
`