import { Injectable, Inject } from '@nestjs/common';
import { DatabaseSymbols } from 'src/constants/DatabaseSymbols';
import { ContractModel} from './model/contract.resource';
import { CreateContractDto } from './dtos/ingredient.dto';
import { IContract } from './contract.interface';

@Injectable()
export class ContractService {

    constructor(
        @Inject(DatabaseSymbols.ContractModel) private readonly contractModel: ContractModel,
    ) {}

    async create(createIngredientDto: CreateContractDto): Promise<IContract> {
        return await this.contractModel.create(createIngredientDto);
    }

    async fetch(id: string): Promise<IContract> {
        return this.contractModel.findById(id).exec();
    }

    async destroy(id: string): Promise<IContract> {
        return this.contractModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, createIngredientDto: CreateContractDto): Promise<IContract> {
        return this.contractModel.update(id, createIngredientDto).exec();
    }
}
