import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractService {

    async getContract() {
        return {
            stake: "stake",
        };
    }
}
