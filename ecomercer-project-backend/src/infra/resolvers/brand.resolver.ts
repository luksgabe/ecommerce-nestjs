import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Brand } from '../../domain/models/brand.model';
import BrandInput from './input/brand.input';
import { BrandService } from '../../domain/services/brand.service';

@Resolver(() => Brand)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Query(() => [Brand])
  public async brands(): Promise<Brand[]> {
    return this.brandService.brandRepository.find();
  }

  @Query(() => Brand, { nullable: true })
  public async brand(@Args('id') id: number): Promise<Brand> {
    return this.brandService.brandRepository.findOne(id);
  }

  // @Mutation(() => Brand)
  // public async createBrand(@Args('data') input: BrandInput): Promise<Brand> {
  //   const brand = this.brandService.brandRepository.create({
  //     name: input.name,
  //   });
  //   return this.brandService.brandRepository.save(brand);
  // }
}
