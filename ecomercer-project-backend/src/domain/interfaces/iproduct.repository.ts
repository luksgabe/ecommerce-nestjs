import { ProductDto } from "../../app/dtos/products.dto";

export interface IProductRepository {
    createProduct(productDto: ProductDto);
}