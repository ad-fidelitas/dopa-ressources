import { InjectionKeys } from 'src/helpers/userfulTypes';

export const DatabaseSymbols: InjectionKeys = {
   Connection: Symbol('Connection'),
   ContractModel: Symbol('ContractModel'),
   TodoListModel: Symbol('TodoListModel'),
};
