import { Inject, Injectable } from '@nestjs/common';
import { CRUDService } from 'src/database/CRUDService';
import { TodoList, TodoListModel } from './model/todo-list.resource';

@Injectable()
export class TodoListService extends CRUDService<TodoList> {
    constructor(@Inject() private todoListModel: TodoListModel) {
        super(todoListModel);
    }
}
