import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Contract } from './graphq-ql/contract.object';
import { ContractService } from './contract.service';
import { CreateContractInput } from './dtos/CreateContract.input';

@Resolver('Contract')
export class ContractResolver {
    constructor(
        private readonly contractService: ContractService,
    ) {}

    @Query(returns => Contract, { name: 'contract'})
    async contract(@Args('id') id: string) {
        return await this.contractService.fetch(id);
    }

    @Mutation(returns => Contract)
    async create(@Args('newContract') newContract: CreateContractInput) {
        return await this.contractService.create(newContract);
    }
}
