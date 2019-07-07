import { InjectionTokens } from 'src/tokens/types';

export const databaseTokens: InjectionTokens = {
   connection: Symbol('Connection'),
   contractModel: Symbol('ContractModel'),
   todoListModel: Symbol('TodoListModel'),
};
