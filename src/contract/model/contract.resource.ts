import { prop, pre, Typegoose } from 'typegoose';
import { Document, Model } from 'mongoose';
import { IContract } from '../contract.interface';
import { IdGen } from '../../database/IdGen';

@pre<Contract>('save', function(next) {
    if (this._id === undefined) {
        this._id = IdGen.genId();
    }
    next();
})
export class Contract extends Typegoose implements IContract {

    @prop({required: false})
    _id: string;

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
