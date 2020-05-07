import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from '../../domain/models/productType.model';
import { ProductTypeRepository } from '../../infra/repositories/productType.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType, ProductTypeRepository])],
})
export class ProductTypeModule {}
