import { Resolver, Query, Args, Mutation, Parent } from '@nestjs/graphql';
import { ProductCategoryInput } from './input/productCategory.input';
import { ProductCategory } from '../../domain/models/productCategory.model';
import { ProductCategoryService } from '../../domain/services/productCategory.service';
import { ProductCategoryDto } from '../../app/dtos/productCategory.dto';

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Query(() => [ProductCategory])
  public async productCategorys(): Promise<ProductCategory[]> {
    return this.productCategoryService.productCategoryRepository.find();
  }

  @Query(() => ProductCategory, { nullable: true })
  public async productCategory(
    @Args('id') id: number,
  ): Promise<ProductCategory> {
    return this.productCategoryService.productCategoryRepository.findOne(id);
  }

  // @Mutation(() => ProductCategory)
  // public async createProductCategory(
  //   @Args('data') input: ProductCategoryInput,
  // ): Promise<ProductCategory> {
  //   let category = new ProductCategory();
  //   category.name = input.name;

  //   category = this.productCategoryService.productCategoryRepository.create(
  //     category,
  //   );
  //   return this.productCategoryService.productCategoryRepository.save(category);
  // }
}
