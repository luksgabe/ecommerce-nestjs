import { Injectable, Post, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../infra/repositories/product.repository';
import { ProductDto } from '../../app/dtos/products.dto';
import { Product } from '../models/product.model';
import { Brand } from '../models/brand.model';
import { BrandService } from './brand.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
    private readonly brandService: BrandService,
  ) {}

  @Post()
  async create(productDto: ProductDto) {
    const { id } = productDto.brand;
    const brand: Brand = await this.brandService.getById(id);
    productDto.brand = brand;
    return this.productRepository.createProduct(productDto);
  }

  async getAllProducts(): Promise<ProductDto[]> {
    const listProduct: Product[] = await this.productRepository.getAllProducts();
    const listProductDto: ProductDto[] = listProduct.map(
      product => new ProductDto(product),
    );
    return listProductDto;
  }

  getHello(): string {
    return 'A product Service!';
  }
}
