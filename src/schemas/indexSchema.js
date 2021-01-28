import { mergeTypeDefs } from "graphql-tools";
import { InputClase } from "./clases/inputClases";
import { mutationClase } from "./clases/mutationClases";
import { QueryClase } from "./clases/queryClases";
import { TypeClase } from "./clases/typeClases";
import { inputClient } from "./clientes/inputClient";
import { mutationClient } from "./clientes/mutationClient";
import { queryClient } from "./clientes/queryClient";
import { clientType } from "./clientes/typeClient";
//TODO mis imports de los resolvers
const typeDefs = [
   inputClient,
   mutationClient,
   queryClient,
   clientType,
   TypeClase,
   InputClase,
   QueryClase,
   mutationClase
 

   
];

export default mergeTypeDefs(typeDefs);