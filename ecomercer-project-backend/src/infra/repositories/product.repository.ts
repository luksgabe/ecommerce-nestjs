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
    const product = {
      name: dto.name,
      description: dto.description,
      value: dto.value,
      evaluation: dto.evaluation,
      color: dto.color,
      brand: this.convertBrand(dto.brand),

    };
    return await this.save(product);
  };
  getAllProducts = async () => {
    return await this.find();
  };

  // private convertBrand = async (dto: BrandDto) => {
  //   const brand = new Brand();
  //   const brandReturn: Brand = Object.assign(brand, dto);
  //   return brandReturn;
  // }

  // private convertProductCategory = async (dto: Product)
}
