import { BrandDto } from '../brand.dto';
import { ProductCategoryDto } from '../productCategory.dto';


export class ProductDto {
  id: number;
  name: string;
  description: string;
  value: number;
  evaluation: number;
  color: string;
  brandId: number;
  brand: BrandDto;
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

  }
}
