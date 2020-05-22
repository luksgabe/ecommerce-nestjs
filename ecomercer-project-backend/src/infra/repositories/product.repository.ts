import { Repository, EntityRepository } from 'typeorm';
import { IProductRepository } from '../../domain/interfaces/iproduct.repository';
import { ProductDto } from '../../app/dtos/products/products.dto';
import { Product } from '../../domain/models/product.model';
import { BrandDto } from '../../app/dtos/brand.dto';
import { Brand } from '../../domain/models/brand.model';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>
  implements IProductRepository {
  createProduct = async (dto: ProductDto) => {
    let product = new Product();
    product.name = dto.name;
    product.description = dto.description;
    product.value = dto.value;
    product.evaluation = dto.evaluation;
    product.color = dto.color;
    product.brand = automapper.map('Brand', 'BrandDto', dto.brand);
    product.createdAt = new Date();
    product.updatedAt = new Date();

    let result = await this.save(product);
    return { result };
  };
  getAllProducts = async () => {
    return await this.find();
  };
}
