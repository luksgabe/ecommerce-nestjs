import { BrandDto } from '../brand.dto';
import { ProductCategoryDto } from '../productCategory.dto';

export class ProductDto {
  id: number;
  name: string;
  description: string;
  value: number;
  evaluation: number;
  color: string;
  brand: BrandDto;
  brandId: number;
  categoryId: number;
  category: ProductCategoryDto;
  createdAt: Date;
  updatedAt: Date;

  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.description = object.description;
    this.value = object.value;
    this.evaluation = object.evaluation;
    this.color = object.color;
    this.brand = object.brand;
    this.brandId = object.brandId;
    this.category = object.category;
    this.categoryId = object.categoryId;
  }
}
