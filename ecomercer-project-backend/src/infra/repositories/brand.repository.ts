import { Brand } from '../../domain/models/brand.model';
import { EntityRepository, Repository } from 'typeorm';
import { BrandDto } from '../../app/dtos/brand.dto';
import { Product } from '../../domain/models/product.model';

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {
  createBrand = async (brand: BrandDto) => {
    return await this.save(brand);
  };

  updateBrand = async (dto: BrandDto) => {
    const brand = {
      name: dto.name,
      products: dto.products.map(dto =>
        automapper.map('ProductDto', 'Product', dto),
      ),
      updatedAt: new Date(),
      createdAt: dto.createdAt,
    };
    return await this.save(brand);
  };
}
