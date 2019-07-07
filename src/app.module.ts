import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ContractModule } from './contract/contract.module';
import { MongooseServicesModule } from './mongoose-services/mongoose-services.module';
import { TodoListModule } from './todo-lists/todo-list.module';

// @AngularScoping -> have a decorator that solves the nestjs submoduling problem
// Extracts the parameter from the @Modules
// Looks into all imports and recursively applies the angular scoping
// Mechanism
// Essentially, this will take care of scoping down all submodules
@Module({
  imports: [
    MongooseServicesModule,
    GraphQLModule.forRoot({
    debug: false,
    autoSchemaFile: 'graph-ql/schema.gql',
  }),
  ContractModule,
  TodoListModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
