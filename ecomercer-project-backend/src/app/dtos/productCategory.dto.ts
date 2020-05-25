import { ProductDto } from './products/products.dto';
import { ProductCategory } from '../../domain/models/productCategory.model';
import { ObjectType, Field } from '@nestjs/graphql';

export class ProductCategoryDto {
  readonly id: number;

  readonly name: string;

  readonly products: ProductDto[];

  readonly createdAt: Date;

  readonly updatedAt: Date;

  constructor(object: ProductCategory) {
    this.id = object.id;
    this.name = object.name;
    this.products = object.products
      ? object.products.map(product => new ProductDto(product))
      : [];
    this.createdAt = object.createdAt;
    this.updatedAt = object.updatedAt;
  }
}
