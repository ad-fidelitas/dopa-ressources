import { Field, ObjectType } from 'type-graphql';
import { IContract } from '../contract.interface';

@ObjectType()
export class Contract implements IContract {
  @Field(type => String)
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
