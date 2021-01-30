import { gql } from "apollo-server";

export const clientType = gql`
    type Client{
        _id:ID
        nombre:String
        email:String
        edad:String
        clase:[Clase]
        password:String
        telefono:String
    }
    type Token{
        client:Client
        token:String
    }

    type NotifyAndAddClass{
        nombre:String
        email:String
        clase:Clase
        mensaje:String
        telefono:String
    }

    type RecoverPassword{
        password:String
        email:String
    }

    type InsertNewPassword{
        message:String
    }

    type RecoverClientPassword{
        _id:ID
        nombre:String
        email:String
        edad:String
        clase:[Clase]
        password:String
        telefono:String
        resetToken:String
    

    }

`;