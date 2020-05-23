import { Field, InputType } from 'type-graphql';
import BrandInput from './brand.input';

class ProductBrandConnectInput {
  @Field()
  readonly id: number;
}

class ProductBrandInput {
  @Field({ nullable: true })
  readonly connect: ProductBrandConnectInput;

  @Field({ nullable: true })
  readonly create: BrandInput;
}

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
}

export default ProductInput;
