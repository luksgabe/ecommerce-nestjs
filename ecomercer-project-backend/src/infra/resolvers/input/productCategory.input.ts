import { Field, InputType } from 'type-graphql';

@InputType()
class ProductInput {
  @Field()
  readonly name: string;
}

export default ProductInput;
