import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { IContract } from 'src/interfaces/contract.interface';

export class CreateContractDto implements IContract {

    @IsString()
    readonly _id: string;

    @IsString()
    readonly participant: string;

    @IsString()
    readonly supervisor: string;

    @IsString()
    readonly stake: string;

    @IsString()
    readonly commitment: string;

    @IsString()
    readonly obligation: string;

}
