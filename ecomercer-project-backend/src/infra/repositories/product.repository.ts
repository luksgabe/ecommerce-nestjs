import { Repository, EntityRepository } from 'typeorm';
import { IProductRepository } from '../../domain/interfaces/iproduct.repository';
import { ProductDto } from '../../app/dtos/products/products.dto';
import { Product } from '../../domain/models/product.model';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>
  implements IProductRepository {
  createProduct = async (dto: ProductDto) => {
    const product = {
      name: dto.name,
      description: dto.description,
      value: dto.value,
      evaluation: dto.evaluation,
      color: dto.color,
      brand: dto.brand,
      category: dto.category,
    };

    const newProduct = await this.create(product);
    let result = await this.save(newProduct);
    return result;
  };
  getAllProducts = async () => {
    return await this.createQueryBuilder('product')
      .innerJoin('product.brand', 'brand')
      .innerJoin('product.category', 'category')
      .select([
        'product',
        'brand.id',
        'brand.name',
        'category.id',
        'category.name',
      ])
      .getMany();
  };
}
