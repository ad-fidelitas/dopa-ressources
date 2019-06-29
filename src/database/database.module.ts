import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { IdGen } from './IdGen';

@Module({
    providers: [...databaseProviders, IdGen],
    exports: [...databaseProviders, IdGen],
})
export class DatabaseModule {}
