import { Field, InputType } from 'type-graphql';
import { ITodoList } from '../todo-list.interface';

@InputType()
export class CreateTodoListInput implements ITodoList {

    @Field({nullable: true}) _id: string;
    @Field() name: string;
    @Field(type => [String]) tasks: string[];

}
