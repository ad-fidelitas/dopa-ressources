import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { ITodoList } from '../todo-list.interface';

export class CreateContractDto implements ITodoList {

    @IsString()
    readonly _id: string;

    @IsString()
    readonly name: string;

    // TODO: find a way to do validation that the tasks are an array and that the objects within are all strings
    // i.e. nested validation
    @IsArray()
    readonly tasks: string[];
}
