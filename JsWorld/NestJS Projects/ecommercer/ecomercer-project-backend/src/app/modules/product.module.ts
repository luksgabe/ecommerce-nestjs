import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain/models/product.model';
import { ProductRepository } from 'src/infra/repositories/product.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
    controllers: [ProductController],
    providers: [],
})
export class ProductModule { }
