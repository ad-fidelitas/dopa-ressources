import { ITodoList } from '../todo-list.interface';
import { ICrudService } from './ICrudService';

export interface ITodoListService extends ICrudService<ITodoList> {}
