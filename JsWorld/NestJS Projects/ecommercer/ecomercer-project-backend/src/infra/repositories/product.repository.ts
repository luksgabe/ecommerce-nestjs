import { Repository } from "typeorm";
import { Product } from "src/domain/models/product.model";
import { IProductRepository } from "../../domain/interfaces/iproduct.repository";
import { ProductDto } from "../../app/dtos/products.dto";

export class ProductRepository extends Repository<Product> implements IProductRepository {
    createProduct = async (productDto: ProductDto) => {
        return await this.save(productDto);
    }

}