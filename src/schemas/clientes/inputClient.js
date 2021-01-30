import { gql } from "apollo-server";

export const inputClient = gql`
    input InputClient{
        nombre:String!
        email:String!
        edad:String!
        password:String
        clase:ID
        telefono:String
    }

    input InputToken{
        email:String!
        password:String!
    }

    input InputNotify{
        nombre:String,
        email:String,
        clase:ID
        telefono:String
    }
    input RecoverPasswordInput{
       email:String
    }

    input InsertNewPasswordInput{
        password:String
        token:String
    }
`;