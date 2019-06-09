import { Field, ObjectType } from 'type-graphql';
import * as stuff from 'type-graphql';

@ObjectType()
export class Contract {
  @Field(type => String)
  broker: string;

  @Field({ nullable: true })
  stake?: string;

  @Field({ nullable: true })
  description?: string;
}
