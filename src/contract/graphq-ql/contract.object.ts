import { IContract } from 'src/interfaces/contract.interface';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Contract implements IContract {

  @Field(type => String)
  _id: string;

  @Field({ nullable: true })
  participant: string;

  @Field({ nullable: true })
  stake: string;

  @Field({ nullable: true })
  commitment: string;

  @Field({nullable: true})
  obligation: string;

  @Field({nullable: true})
  supervisor: string;
}
