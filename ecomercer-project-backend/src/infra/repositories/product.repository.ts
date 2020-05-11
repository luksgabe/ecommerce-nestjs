import { Repository, EntityRepository } from 'typeorm';
import { IProductRepository } from '../../domain/interfaces/iproduct.repository';
import { ProductDto } from '../../app/dtos/products.dto';
import { Product } from '../../domain/models/product.model';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>
  implements IProductRepository {
  createProduct = async (product: ProductDto) => {
    return await this.save(product);
  };
  getAllProducts = async () => {
    return await this.find();
  };
}
