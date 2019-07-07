import { Provider } from '@nestjs/common';
import { Model } from 'mongoose';
import { ServiceKeys } from '../../constants/ServiceKeys';
import { ContractService } from './contract.service';

const buildServiceProvider =
<Service>(key: symbol, ServiceConstructor: new(model: Model) => Service): Provider => ({
    provide: key,
    useClass: ServiceConstructor,
});

export const serviceProviders: Provider[] = [
    buildServiceProvider<ContractService>(ServiceKeys.ContractService, ContractService),
];
