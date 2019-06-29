import { InputType, Field } from 'type-graphql';
import { IContract } from '../contract.interface';

@InputType()
export class CreateContractInput implements IContract {

    @Field({nullable: true}) _id: string;

    @Field() participant: string;
    @Field() supervisor: string;
    @Field() obligation: string;
    @Field() stake: string;
    @Field() commitment: string; // a dealine, find a better term for this
}
