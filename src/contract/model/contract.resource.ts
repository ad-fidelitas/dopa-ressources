import { prop, Typegoose } from 'typegoose';
import { Document, Model } from 'mongoose';
import { IContract } from '../contract.interface';

export class Contract extends Typegoose implements IContract {

    @prop()
    participant: string;

    @prop()
    supervisor: string;

    @prop()
    stake: string;

    @prop()
    commitment: string;

    @prop()
    obligation: string;

}

export type ContractDocument = Contract & Document;
export type ContractModel = Contract & Model<ContractDocument>;
