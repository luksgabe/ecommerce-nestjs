import { ProductDto } from "src/app/dtos/products.dto";

export interface IProductRepository {
    createProduct(productDto: ProductDto);
}