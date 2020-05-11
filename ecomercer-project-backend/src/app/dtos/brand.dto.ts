import { ProductDto } from './products.dto';
import { Brand } from '../../domain/models/brand.model';

export class BrandDto {
  readonly id: number;
  readonly name: string;
  readonly products: ProductDto[];

  constructor(object: Brand) {
    this.id = object.id;
    this.name = object.name;
    this.products = object.products
      ? object.products.map(product => new ProductDto(product))
      : [];
  }
}
