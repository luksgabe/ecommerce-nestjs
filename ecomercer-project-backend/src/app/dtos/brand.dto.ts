import { ProductDto } from './products/products.dto';
import { Brand } from '../../domain/models/brand.model';

export class BrandDto {
  readonly id: number;
  readonly name: string;
  readonly products: ProductDto[];
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(object: Brand) {
    this.id = object.id;
    this.name = object.name;
    this.createdAt = object.createdAt;
    this.updatedAt = object.updatedAt;
    this.products = object.products
      ? object.products.map(product => new ProductDto(product))
      : [];
  }
}
