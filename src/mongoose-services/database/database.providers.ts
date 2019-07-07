import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { DatabaseSymbols } from '../DatabaseSymbols';

export const mongooseConnectionProvider: Provider = {
        provide: DatabaseSymbols.Connection,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://localhost/dopa'),
};
