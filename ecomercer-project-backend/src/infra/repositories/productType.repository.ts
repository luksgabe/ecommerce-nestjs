import { ProductType } from '../../domain/models/productType.model';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(ProductType)
export class ProductTypeRepository extends Repository<ProductType> {}
