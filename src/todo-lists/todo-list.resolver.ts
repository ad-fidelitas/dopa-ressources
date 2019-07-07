import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ITodoListService } from 'src/interfaces/services/ITodoListService';
import { serviceTokens } from 'src/tokens/services';
import { CreateTodoListInput } from './dtos/CreateTodoList.input';
import { TodoList } from './graphq-ql/todo-list.object';

@Resolver('TodoList')
export class TodoListResolver {

    constructor(
        @Inject(serviceTokens.todoList) private todoListService: ITodoListService,
    ) {/* */}

    @Query(returns => TodoList, { name: 'todoList'})
    async todoList(@Args('_id') id: string) {
        return this.todoListService.fetch(id);
    }

    @Mutation(returns => TodoList)
    async createTodoList(@Args('newTodoList') newTodoList: CreateTodoListInput) {
        return this.todoListService.create(newTodoList);
    }

    @Mutation(returns => TodoList)
    async deleteTodoList(@Args('_id') id: string) {
        return this.todoListService.delete(id);
    }

    @Mutation(returns => TodoList)
    async updateTodoList(@Args('_id') id: string, @Args('newTodoList') newTodoList: CreateTodoListInput) {
        return this.todoListService.update(id, newTodoList);
    }
}
