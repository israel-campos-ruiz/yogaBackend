import { gql } from "apollo-server";

export const queryTest = gql`
    type Query{
        obtenerCadenaTexto:String
    }

`