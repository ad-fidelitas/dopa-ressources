import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ContractModule } from './contract/contract.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
    debug: false,
    autoSchemaFile: 'graph-ql/schema.gql',
  }),
    ContractModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
