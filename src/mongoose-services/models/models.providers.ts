import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { Typegoose } from 'typegoose';
import { databaseTokens } from '../databaseTokens';
import { Contract } from './contract.resource';
import { TodoList } from './todo-list.resource';

const buildModelProvider =
<RessourceModel extends Typegoose>(key: symbol, ModelConstructor: new() => RessourceModel): Provider => {
    return {
        provide: key,
        useFactory: (connection: Connection) => (new ModelConstructor())
            .getModelForClass<RessourceModel>(new ModelConstructor(), {
            existingConnection: connection,
        }),
        inject: [databaseTokens.connection],
    };
};

export const modelProviders: Provider[] = [
    buildModelProvider(databaseTokens.contractModel, Contract),
    buildModelProvider(databaseTokens.todoListModel, TodoList),
];
