import { Inject, Injectable } from '@nestjs/common';
import { ITodoListService } from 'src/interfaces/services/ITodoListService';
import { databaseTokens } from '../databaseTokens';
import { TodoList, TodoListModel } from '../models/todo-list.resource';
import { CRUDService } from '../templates/CRUDService';

@Injectable()
export class TodoListService extends CRUDService<TodoList> implements ITodoListService {

    constructor(
        @Inject(databaseTokens.todoListModel) private readonly todolistModel: TodoListModel,
    ) {
        super(todolistModel);
    }
}
