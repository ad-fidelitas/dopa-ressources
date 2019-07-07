import { ITodoList } from 'src/interfaces/todo-list.interface';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateTodoListInput implements ITodoList {

    @Field({nullable: true}) _id: string;
    @Field() name: string;
    @Field(type => [String]) tasks: string[];

}
