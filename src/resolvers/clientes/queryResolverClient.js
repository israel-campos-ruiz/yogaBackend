import { verifyJWT } from "../../middlewares/jwt";
import Usuario from "../../models/clientes";
import Clases from '../../models/clase'
export const queryResolverClient = {
    Query:{
        getClients: async () => await Usuario.find({}),
        getClient: async (__, {id}) => await Usuario.findOne({_id:id}),    
        async getClientByToken(__, {token}){
            const {input:client} = await verifyJWT(token);
            return client
        },
    },
    Client:{
         clase: async({clase}) => {
          
           return  await Clases.find({_id:clase}).populate('clase').exec()
         }
    }
}