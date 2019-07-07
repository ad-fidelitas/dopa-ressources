import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IContractService } from 'src/interfaces/IContractService';
import { serviceTokens } from 'src/tokens/services';
import { CreateContractInput } from './dtos/CreateContract.input';
import { Contract } from './graphq-ql/contract.object';

@Resolver('Contract')
export class ContractResolver {
    constructor(
        @Inject(serviceTokens.contract) private readonly contractService: IContractService,
    ) {}

    @Query(returns => Contract, { name: 'contract'})
    async contract(@Args('_id') id: string) {
        return this.contractService.fetch(id);
    }

    @Mutation(returns => Contract)
    async create(@Args('newContract') newContract: CreateContractInput) {
        return this.contractService.create(newContract);
    }

    @Mutation(returns => Contract)
    async delete(@Args('_id') id: string) {
        return this.contractService.delete(id);
    }

    @Mutation(returns => Contract)
    async update(@Args('_id') id: string, @Args('newContract') newContract: CreateContractInput) {
        return this.contractService.update(id, newContract);
    }
}
