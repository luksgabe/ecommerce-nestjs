import 'automapper-ts';
import { ProductDto } from '../dtos/products/products.dto';

export class ModelToDto {
  public setMap(): void {
    automapper.initialize((config: AutoMapperJs.IConfiguration) => {
      config.createMap('Product', 'ProductDto');
      config.createMap('Brand', 'BrandDto');
      config.createMap('ProductCategory', 'ProductCategoryDto');
    });
  }
}
