import { gql } from "apollo-server";

export const QueryClase = gql`
    type Query{
        getClases:[Clase!]!
        getClase(_id:ID): Clase!
    }
`