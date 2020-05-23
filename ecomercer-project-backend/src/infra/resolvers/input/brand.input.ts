import { Field, InputType } from 'type-graphql';

@InputType()
class BrandInput {
  @Field()
  readonly name: string;
}

export default BrandInput;