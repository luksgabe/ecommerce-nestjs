import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from '../../domain/models/brand.model';
import { BrandRepository } from '../../infra/repositories/brand.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Brand, BrandRepository])],
})
export class BrandModule {}
