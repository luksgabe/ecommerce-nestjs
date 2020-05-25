import { Injectable, Post, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../infra/repositories/product.repository';
import { ProductDto } from '../../app/dtos/products/products.dto';
import { Product } from '../models/product.model';
import { Brand } from '../models/brand.model';
import { BrandService } from './brand.service';
import { BrandDto } from '../../app/dtos/brand.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
    private readonly brandService: BrandService,
  ) {}

  async create(productDto: ProductDto) {
    const brand: Brand = await this.brandService.getById(productDto.brand.id);
    productDto.brandId = brand.id;

    const product = await this.productRepository.createProduct(productDto);
    brand.products.push(automapper.map('ProductDto', 'Product', product));

    await this.brandService.update(productDto.brand);
    return product;
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
