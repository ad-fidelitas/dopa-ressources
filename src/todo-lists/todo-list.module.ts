import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { MongooseServicesModule } from 'src/mongoose-services/mongoose-services.module';
import { TodoListResolver } from './todo-list.resolver';

@Module({

  imports: [MongooseServicesModule],
  providers: [TodoListResolver],
})
export class TodoListModule {}
