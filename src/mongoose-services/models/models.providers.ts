import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { Typegoose } from 'typegoose';
import { DatabaseSymbols } from '../DatabaseSymbols';
import { Contract } from './contract.resource';

const buildModelProvider =
<RessourceModel extends Typegoose>(key: symbol, ModelConstructor: new() => RessourceModel): Provider => {
    return {
        provide: key,
        useFactory: (connection: Connection) => (new ModelConstructor())
            .getModelForClass<RessourceModel>(new ModelConstructor(), {
            existingConnection: connection,
        }),
        inject: [DatabaseSymbols.Connection],
    };
};

export const modelProviders: Provider[] = [
    buildModelProvider(DatabaseSymbols.ContractModel, Contract),
];
