import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from '../../domain/models/brand.model';
import { BrandRepository } from '../../infra/repositories/brand.repository';
import { BrandController } from '../controllers/brand.controller';
import { BrandService } from '../../domain/services/brand.service';

@Module({
  imports: [TypeOrmModule.forFeature([Brand, BrandRepository])],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
