import { Injectable, Post, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../infra/repositories/product.repository';
import { ProductDto } from '../../app/dtos/products/products.dto';
import { Product } from '../models/product.model';
import { Brand } from '../models/brand.model';
import { BrandService } from './brand.service';
import { ProductCategory } from '../models/productCategory.model';
import { ProductCategoryService } from './productCategory.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
    private readonly brandService: BrandService,
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  async create(productDto: ProductDto) {
    const brand: Brand = await this.brandService.getById(productDto.brandId);
    const category: ProductCategory = await this.productCategoryService.getById(
      productDto.categoryId,
    );

    productDto.brand = automapper.map('BrandDto', 'Brand', brand);
    productDto.category = automapper.map(
      'ProductCategoryDto',
      'ProductCategory',
      category,
    );

    const product = await this.productRepository.createProduct(productDto);
    return product;
  }

  async getAllProducts(): Promise<ProductDto[]> {
    const listProduct: Product[] = await this.productRepository.getAllProducts();
    const listProductDto: ProductDto[] = listProduct.map(
      (product) => new ProductDto(product),
    );
    return listProductDto;
  }

  getHello(): string {
    return 'A product Service!';
  }
}
