import { gql } from "apollo-server";

export const queryClient = gql`
    type Query{
        getClients: [Client]!
        getClient(id:ID):Client
        getClientByToken(token:String!):Client
    }
`;