import { Injectable, Inject } from '@nestjs/common';
import { DatabaseSymbols } from 'src/constants/DatabaseSymbols';
import { ContractModel} from './model/contract.resource';
import { CRUDService } from 'src/database/CRUDService';
import { Contract } from './model/contract.resource';

@Injectable()
export class ContractService extends CRUDService<Contract> {

    constructor(
        @Inject(DatabaseSymbols.ContractModel) private readonly contractModel: ContractModel,
    ) {
        super(contractModel);
    }
}
