const { ApolloServer } = require( 'apollo-server-micro');
const { typeDefs } = require('./../../data/schemas');
const { resolvers } = require('./../../data/resolvers');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require( "apollo-server-core");

const apolloServer = new ApolloServer(
{ 
    typeDefs, 
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const config = {
    api: {
        bodyParser: false
    }
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
      'Access-Control-Allow-Origin',
      'https://studio.apollographql.com'
    );
    
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    if (req.method === 'OPTIONS') {
        res.end()
        return false
    };

    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
};