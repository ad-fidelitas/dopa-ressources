import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { databaseTokens } from '../databaseTokens';

export const mongooseConnectionProvider: Provider = {
        provide: databaseTokens.connection,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://localhost/dopa'),
};
