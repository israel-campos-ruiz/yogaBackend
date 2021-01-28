import { ApolloServer } from 'apollo-server';
import resolvers from '../src/resolvers/indexResolvers'
import typeDefs from '../src/schemas/indexSchema'
import conectDB from './db/db';
import "regenerator-runtime/runtime.js";
import { verifyJWT } from './middlewares/jwt';

//conectar db
conectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : async ({ req }) => {
        //  console.log(req.headers['authorization'])

        const token = req.headers['authorization'] || ''
        if(token) {
            try {
               const user = await verifyJWT(token);
                return user;
            } catch (error) {
                console.log(error)
            }
        }
    }
});
const serverOnLoad = async() => {
    const {url} = await server.listen({port:process.env.PORT || 4000});
    console.log(`corriendo en ${url}`)
}
serverOnLoad();





