import { Brand } from '../../domain/models/brand.model';
import { EntityRepository, Repository } from 'typeorm';
import { BrandDto } from 'src/app/dtos/brand.dto';

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {
  createBrand = async (brand: BrandDto) => {
    return await this.save(brand);
  };
}
