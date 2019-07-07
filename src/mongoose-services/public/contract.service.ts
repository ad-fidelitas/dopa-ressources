import { Inject, Injectable } from '@nestjs/common';
import { IContractService } from 'src/interfaces/IContractService';
import { databaseTokens } from '../databaseTokens';
import { Contract, ContractModel } from '../models/contract.resource';
import { CRUDService } from '../templates/CRUDService';

@Injectable()
export class ContractService extends CRUDService<Contract> implements IContractService {

    constructor(
        @Inject(databaseTokens.contractModel) private readonly contractModel: ContractModel,
    ) {
        super(contractModel);
    }
}
