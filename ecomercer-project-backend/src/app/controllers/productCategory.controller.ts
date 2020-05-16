import { AppController } from './app.controller';
import { Post, Body } from '@nestjs/common';
import { ProductCategoryDto } from '../dtos/productCategory.dto';
import { ProductCategoryService } from '../../domain/services/productCategory.service';
export class ProductCategoryController extends AppController {
    
    constructor(private readonly productCategoryService: ProductCategoryService) {
        super();
    }

    @Post()
    async create(@Body() productCategoryDto: ProductCategoryDto) {
      try {
        return await this.productCategoryService.create(productCategoryDto);
      } catch (err) {
        return { message: err.toString() };
      }
    }
  
    async index(): Promise<ProductCategoryDto[]> {
      const listBrands: ProductCategoryDto[] = await this.productCategoryService.getAll();
      return listBrands;
    }
}