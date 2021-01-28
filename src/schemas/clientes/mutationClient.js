import { gql } from "apollo-server";

export const mutationClient = gql`
    type Mutation{
        createClient(input:InputClient): Client
        authenticateUser(input: InputToken) : Token
        notifyUserAndAddClass(input:InputNotify):NotifyAndAddClass
        updateUser(_id:ID, input:InputClient):Client
        deleteUserClass(_id:ID, _idClass:ID):Client
        recoverPassword(input:RecoverPasswordInput):RecoverPassword
    }

`;
