import { Module } from '@nestjs/common';
import { MongooseServicesModule } from 'src/mongoose-services/mongoose-services.module';
import { ContractResolver } from './contract.resolver';

// Wanted behavior
// Inject a database module that gets resolved by the top level module
// Provider is a service from that module, with the module getting decided at the top level

// submodule solution
// This module is somehow a submodule dependant on the dependencies of the parent

// Functional composition approach
// Mediator that takes care of redirection the information to the proper
// Hopefully the module takes care of this procedure

@Module({
    imports: [MongooseServicesModule],
    providers: [ContractResolver],
})
export class ContractModule {}
