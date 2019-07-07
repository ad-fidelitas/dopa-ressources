import { Provider } from '@nestjs/common';
import { Model } from 'mongoose';
import { serviceTokens } from 'src/tokens/services';
import { ContractService } from './contract.service';

const buildServiceProvider =
<Service>(key: symbol, ServiceConstructor: new(model: Model) => Service): Provider => ({
    provide: key,
    useClass: ServiceConstructor,
});

export const serviceProviders: Provider[] = [
    buildServiceProvider<ContractService>(serviceTokens.contract, ContractService),
];
