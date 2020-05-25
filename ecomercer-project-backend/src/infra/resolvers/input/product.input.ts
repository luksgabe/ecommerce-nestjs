import { Field, InputType } from 'type-graphql';

@InputType()
class ProductInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field()
  readonly value: number;

  @Field()
  readonly color: string;

  @Field()
  readonly evaluation: number;

  @Field()
  readonly brandId: number;

  @Field()
  readonly productCategoryId: number;
}

export default ProductInput;
