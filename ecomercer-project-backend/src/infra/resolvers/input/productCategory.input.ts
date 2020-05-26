import { Field, InputType } from 'type-graphql';

@InputType()
export class ProductCategoryInput {
  @Field() readonly name: string;
}
