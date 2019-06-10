import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Contract } from './graphq-ql/contract.object';
import { ContractService } from './contract.service';
import { CreateContractInput } from './dtos/CreateContract.input';
import { IContract } from './contract.interface';

@Resolver('Contract')
export class ContractResolver {
    constructor(
        private readonly contractService: ContractService,
    ) {}

    @Query(returns => Contract, { name: 'contract'})
    async contract(@Args('id') id: string) {
        return this.contractService.fetch(id);
    }

    @Mutation(returns => Contract)
    async create(@Args('newContract') newContract: CreateContractInput) {
        return this.contractService.create(newContract);
    }

    @Mutation(returns => Contract)
    async delete(@Args('id') id: string) {
        return this.contractService.destroy(id);
    }

    @Mutation(returns => Contract)
    async update(@Args('id') id: string, @Args('newContract') newContract: CreateContractInput) {
        return this.contractService.update(id, newContract);
    }
}
