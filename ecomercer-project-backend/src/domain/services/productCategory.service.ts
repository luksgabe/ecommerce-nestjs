import { ProductCategoryRepository } from '../../infra/repositories/productCategory.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductCategoryDto } from '../../app/dtos/productCategory.dto';
import { ProductCategory } from '../models/productCategory.model';
@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategoryRepository)
    public readonly productCategoryRepository: ProductCategoryRepository,
  ) {}

  public async create(productCategoryDto: ProductCategoryDto) {
    const result: ProductCategory = await this.productCategoryRepository.createCategory(
      productCategoryDto,
    );
    console.log(result);
    return new ProductCategoryDto(result);
  }

  public async getById(id: number): Promise<ProductCategory> {
    return await this.productCategoryRepository.findOne({
      where: { id },
      relations: ['products'],
    });
  }

  public async getAll(): Promise<ProductCategoryDto[]> {
    const result: ProductCategory[] = await this.productCategoryRepository.find();
    return result.map((brand) => new ProductCategoryDto(brand));
  }
}
