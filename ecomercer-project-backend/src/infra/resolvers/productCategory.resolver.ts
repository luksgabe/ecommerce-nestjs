import { Resolver, Query, Args, Mutation, Parent } from '@nestjs/graphql';
import ProductCategoryInput from './input/productCategory.input';
import { ProductCategoryRepository } from '../repositories/productCategory.repository';
import { ProductCategory } from '../../domain/models/productCategory.model';
import { Product } from '../../domain/models/product.model';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository,
  ) {}

  @Query(() => [ProductCategory])
  public async productCategorys(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.find();
  }

  @Query(() => ProductCategory, { nullable: true })
  public async productCategory(
    @Args('id') id: number,
  ): Promise<ProductCategory> {
    return this.productCategoryRepository.findOne(id);
  }

  @Mutation(() => ProductCategory)
  public async createProductCategory(
    @Args('data') input: ProductCategoryInput,
  ): Promise<ProductCategory> {
    const brand = this.productCategoryRepository.create({ name: input.name });
    return this.productCategoryRepository.save(brand);
  }
}
