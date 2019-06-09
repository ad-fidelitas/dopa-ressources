export interface Contract {
    participant: string;
    supervisor: string;

    obligation: string;
    stake: string;
    commitment: string; // a dealine, find a better term for this
}
