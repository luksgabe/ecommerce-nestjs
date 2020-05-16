import { Repository, EntityRepository } from 'typeorm';
import { ProductCategory } from '../../domain/models/productCategory.model';
import { ProductCategoryDto } from '../../app/dtos/productCategory.dto';

@EntityRepository(ProductCategory)
export class ProductCategoryRepository extends Repository<ProductCategory> {

    createCategory = async (productCategory: ProductCategoryDto) => {
        return await this.save(productCategory);
    }
}
