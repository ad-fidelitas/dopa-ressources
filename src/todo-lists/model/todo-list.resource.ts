import { Document, Model } from 'mongoose';
import { pre, prop, Typegoose } from 'typegoose';
import { IdGen } from '../../database/IdGen';
import { ITodoList } from '../todo-list.interface';

@pre<TodoList>('save', function(next) {
    if (this._id === undefined) {
        this._id = IdGen.genId();
    }
    next();
})
export class TodoList extends Typegoose implements ITodoList {

    @prop({required: false})
    _id: string;

    @prop()
    name: string;

    // TODO: this most likely fails because string array validate is bad
    @prop()
    tasks: string[];
}

export type TodoListDocument = TodoList & Document;
export type TodoListModel = TodoList & Model<TodoListDocument>;
