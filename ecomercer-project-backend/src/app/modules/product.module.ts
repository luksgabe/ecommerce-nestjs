import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from '../../infra/repositories/product.repository';
import { Product } from '../../domain/models/product.model';
import { ProductService } from '../../domain/services/product.service';
import { BrandService } from '../../domain/services/brand.service';
import { Brand } from '../../domain/models/brand.model';
import { BrandRepository } from '../../infra/repositories/brand.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductRepository]),
    TypeOrmModule.forFeature([Brand, BrandRepository]),
  ],
  controllers: [ProductController],
  providers: [ProductService, BrandService],
})
export class ProductModule {}
