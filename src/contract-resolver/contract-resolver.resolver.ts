import { Resolver, Query, Args } from '@nestjs/graphql';
import { Contract } from '../Contract';
import { Int } from 'type-graphql';
import { ContractService } from './Contract.service';

@Resolver('CowuutractResolver')
export class ContractResolverResolver {
    constructor(
        private readonly contractService: ContractService,
    ) {}

    @Query(returns => Contract, { name: 'contract'})
    async contract() {
        return await this.contractService.getContract();
    }
}
