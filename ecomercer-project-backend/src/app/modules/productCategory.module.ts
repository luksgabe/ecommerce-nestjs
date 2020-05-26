import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from '../../domain/models/productCategory.model';
import { ProductCategoryRepository } from '../../infra/repositories/productCategory.repository';
import { ProductCategoryController } from '../controllers/productCategory.controller';
import { ProductCategoryResolver } from '../../infra/resolvers/productCategory.resolver';
import { ProductCategoryService } from '../../domain/services/productCategory.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCategory, ProductCategoryRepository]),
  ],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
