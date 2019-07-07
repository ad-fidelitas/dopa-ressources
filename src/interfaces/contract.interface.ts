import { IRessource } from 'src/interfaces/IRessource';

export interface IContract extends IRessource {
    participant: string;
    supervisor: string;

    obligation: string;
    stake: string;
    commitment: string; // a dealine, find a better term for this
}
