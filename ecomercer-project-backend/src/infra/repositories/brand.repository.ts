import { Brand } from '../../domain/models/brand.model';
import { EntityRepository, Repository } from 'typeorm';
import { BrandDto } from '../../app/dtos/brand.dto';
import { Product } from '../../domain/models/product.model';

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {
  createBrand = async (brand: BrandDto) => {
    return await this.save(brand);
  };

  updateBrand = async (brand: BrandDto) => {
    const toUpdate = await this.findOne(brand.id);
    // toUpdate.name = brand.name;
    // toUpdate.products = brand.products.map(dto => new Product(dto));
    // toUpdate.updatedAt = brand.updatedAt;
    // toUpdate.createdAt = brand.createdAt;
    const updated = Object.assign(toUpdate, brand);
    return await this.save(updated);
  }
}
