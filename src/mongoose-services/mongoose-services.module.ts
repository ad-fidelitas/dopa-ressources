import { Module } from '@nestjs/common';
import { mongooseConnectionProvider } from './database/database.providers';
import { modelProviders } from './models/models.providers';
import { serviceProviders } from './public/service.providers';

@Module({
    imports: [],
    controllers: [],
    providers: [
        mongooseConnectionProvider,
        ...modelProviders,
        ...serviceProviders,
    ],
    exports: [...serviceProviders],
})
export class MongooseServicesModule {}
