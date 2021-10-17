import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

const GraphQL = GraphQLModule.forRoot({
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
  playground: true,
})

export default GraphQL;
