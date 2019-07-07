import { ITodoList } from 'src/interfaces/todo-list.interface';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class TodoList implements ITodoList {

  @Field(type => String)
  _id: string;

  @Field(type => String)
  name: string;

  @Field(type => [String])
  tasks: string[];
}
