import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from '../../infra/repositories/product.repository';
import { Product } from '../../domain/models/product.model';
import { ProductService } from '../../domain/services/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }
