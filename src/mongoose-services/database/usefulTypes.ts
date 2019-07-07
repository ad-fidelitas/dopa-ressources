import { Document, Model } from 'mongoose';
import { Typegoose } from 'typegoose';

export type TypegooseDocument = Typegoose & Document;
export type TypegooseModel = Typegoose & Model<TypegooseDocument>;
