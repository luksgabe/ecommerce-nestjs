import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandRepository } from '../../infra/repositories/brand.repository';
import { BrandDto } from '../../app/dtos/brand.dto';
import { Brand } from '../models/brand.model';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandRepository)
    private readonly brandRepository: BrandRepository,
  ) {}

  public async create(brandDto: BrandDto): Promise<BrandDto> {
    const result: Brand = await this.brandRepository.createBrand(brandDto);
    console.log(result);
    return new BrandDto(result);
  }

  public async getAll(): Promise<BrandDto[]> {
    const result: Brand[] = await this.brandRepository.find();
    return result.map(brand => new BrandDto(brand));
  }

  public async getById(id: number): Promise<Brand> {
    return await this.brandRepository.findOne(id);
  }
}
