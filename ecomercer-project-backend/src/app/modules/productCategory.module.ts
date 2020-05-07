import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from '../../domain/models/productCategory.model';
import { ProductCategoryRepository } from '../../infra/repositories/productCategory.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCategory, ProductCategoryRepository]),
  ],
})
export class ProductCategoryModule {}
