import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../infra/repositories/product.repository';
import { ProductDto } from '../../app/dtos/products.dto';

@Injectable()
export class ProductService { 
    
    constructor(
        @InjectRepository(ProductRepository) 
        private readonly productRepository: ProductRepository,
        ) {}

    @Post()
    async create(productDto: ProductDto) {
        return this.productRepository.createProduct(productDto);
    }

    async getAllProducts(): Promise<ProductDto[]> {
        const listProduct: ProductDto[] = await this.productRepository.getAllProducts();
        return listProduct;
    }

    getHello(): string {
        return 'A product Service!';
    }
}
