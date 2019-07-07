import { IRessource } from 'src/interfaces/IRessource';

export interface ITodoList extends IRessource {
    name: string;
    tasks: string[];
}
