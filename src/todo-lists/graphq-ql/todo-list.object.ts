import { Field, ObjectType } from 'type-graphql';
import { ITodoList } from '../todo-list.interface';

@ObjectType()
export class TodoList implements ITodoList {

  @Field(type => String)
  _id: string;

  @Field(type => String)
  name: string;

  @Field(type => [String])
  tasks: string[];
}
