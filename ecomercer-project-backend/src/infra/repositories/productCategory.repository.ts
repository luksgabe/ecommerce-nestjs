import { Repository, EntityRepository } from 'typeorm';
import { ProductCategory } from '../../domain/models/productCategory.model';

@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {}
