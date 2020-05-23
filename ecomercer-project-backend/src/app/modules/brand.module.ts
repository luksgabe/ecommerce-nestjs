import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from '../../domain/models/brand.model';
import { BrandRepository } from '../../infra/repositories/brand.repository';
import { BrandController } from '../controllers/brand.controller';
import { BrandService } from '../../domain/services/brand.service';
import { BrandResolver } from '../../infra/resolvers/brand.resolver';

const graphQLImports = [BrandResolver];

@Module({
  imports: [
    TypeOrmModule.forFeature([Brand, BrandRepository]),
    ...graphQLImports,
  ],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
