const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

const AvatarType = new GraphQLObjectType({
    name: 'Avatar',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        avatar: {
            type: AvatarType,
            resolve(parent, args) {
                return { id: '1', name: 'Sample Avatar' };
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
