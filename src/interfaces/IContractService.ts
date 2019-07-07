import { IContract } from 'src/interfaces/contract.interface';
import { ICrudService } from './services/ICrudService';

export interface IContractService extends ICrudService<IContract> {}
