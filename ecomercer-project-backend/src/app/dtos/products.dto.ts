import { ProductCategory } from '../../domain/models/productCategory.model';
import { Brand } from '../../domain/models/brand.model';
import { ProductType } from '../../domain/models/productType.model';

export class ProductDto {
  id: number;
  name: string;
  description: string;
  value: number;
  evaluation: number;
  color: string;
  brandId: number;
  brand: Brand;
  categoryId: number;
  category: ProductCategory;
  typeId: number;
  type: ProductType;

  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.description = object.description;
    this.value = object.value;
    this.evaluation = object.evaluation;
    this.color = object.color;
    this.brand = object.brand;
    this.typeId = object.typeId;
    this.categoryId = object.categoryId;
  }
}
