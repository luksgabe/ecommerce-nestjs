import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from '../../domain/models/brand.model';
import { BrandRepository } from '../../infra/repositories/brand.repository';
import { BrandController } from '../controllers/brand.controller';
import { BrandService } from '../../domain/services/brand.service';
import { BrandResolver } from '../../infra/resolvers/brand.resolver';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Brand, BrandRepository])],
  controllers: [BrandController],
  providers: [BrandResolver, BrandService],
})
export class BrandModule {}
