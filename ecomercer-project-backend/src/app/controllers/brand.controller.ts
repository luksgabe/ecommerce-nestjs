import { Controller, Post, Body } from '@nestjs/common';
import { AppController } from './app.controller';
import { BrandService } from '../../domain/services/brand.service';
import { BrandDto } from '../dtos/brand.dto';

@Controller('brands')
export class BrandController extends AppController {
  constructor(private readonly brandService: BrandService) {
    super();
  }

  @Post()
  async create(@Body() brandDto: BrandDto) {
    try {
      return await this.brandService.create(brandDto);
    } catch (err) {
      return { message: err.toString() };
    }
  }

  async index(): Promise<BrandDto[]> {
    const listBrands: BrandDto[] = await this.brandService.getAll();
    return listBrands;
  }
}
