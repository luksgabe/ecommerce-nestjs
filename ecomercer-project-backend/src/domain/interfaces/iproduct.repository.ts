import { ProductDto } from '../../app/dtos/products/products.dto';

export interface IProductRepository {
  createProduct(product: ProductDto);
}
