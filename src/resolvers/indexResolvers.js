import { mergeResolvers } from '@graphql-tools/merge';
import { MutationClase } from './clases/mutationResolverClase';
import { QueryClaseResolver } from './clases/queryResolverClase';
import { mutationClientResolver } from './clientes/mutationResolverClient';
import { queryResolverClient } from './clientes/queryResolverClient';

const resolvers = [
    mutationClientResolver,
    queryResolverClient,
    MutationClase,
    QueryClaseResolver
 
]

export default mergeResolvers(resolvers);