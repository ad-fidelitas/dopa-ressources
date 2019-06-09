import * as mongoose from 'mongoose';
import { Provider } from '@nestjs/common';
import { DatabaseSymbols } from '../constants/DatabaseSymbols';

export const databaseProviders: Provider[] = [
    {
        provide: DatabaseSymbols.Connection,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://localhost/bar_app'),
    },
];
