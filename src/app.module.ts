import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ContractResolverResolver } from './contract-resolver/contract-resolver.resolver';
import { ContractService } from './contract-resolver/Contract.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
    debug: false,
    autoSchemaFile: 'graph-ql/schema.gql',
  }),
],
  controllers: [AppController],
  providers: [AppService, ContractResolverResolver, ContractService],
})
export class AppModule {}
