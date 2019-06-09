import { Module } from '@nestjs/common';
import { ContractResolver } from './contract.resolver';
import { ContractService } from './contract.service';
import { Connection } from 'mongoose';
import { Contract } from './model/contract.resource';
import { DatabaseSymbols } from '../constants/DatabaseSymbols';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
    ContractResolver,
    ContractService,
    {
        provide: DatabaseSymbols.ContractModel,
        useFactory: (connection: Connection) => (new Contract())
            .getModelForClass<Contract>(new Contract(), {
            existingConnection: connection,
        }),
        inject: [DatabaseSymbols.Connection],
    },
    ],
})
export class ContractModule {}
