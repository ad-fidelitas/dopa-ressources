import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DatabaseSymbols } from '../constants/DatabaseSymbols';
import { DatabaseModule } from '../database/database.module';
import { TodoList } from './model/todo-list.resource';
import { TodoListResolver } from './todo-list.resolver';
import { TodoListService } from './todo-list.service';

@Module({

  imports: [DatabaseModule],
  providers: [TodoListResolver, TodoListService, {
        provide: DatabaseSymbols.TodoListModel,
        useFactory: (connection: Connection) => (new TodoList())
            .getModelForClass<TodoList>(new TodoList(), {
            existingConnection: connection,
        }),
        inject: [DatabaseSymbols.Connection],
    },
  ],
})
export class TodoListModule {}
