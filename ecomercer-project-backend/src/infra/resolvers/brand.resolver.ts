import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BrandRepository } from '../repositories/brand.repository';
import { Brand } from '../../domain/models/brand.model';
import BrandInput from './input/brand.input';

@Resolver()
export class BrandResolver {
    constructor(private readonly brandRepository: BrandRepository) {}

    @Query(() => [Brand])
    public async brands(): Promise<Brand[]> {
        return this.brandRepository.find();
    }

    @Query(() => Brand, {nullable: true})
    public async brand(@Args('id') id: number): Promise<Brand> {
        return this.brandRepository.findOne(id);
    }

    @Mutation(() => Brand)
    public async createBrand(@Args('data') input: BrandInput): Promise<Brand> {
        const brand = this.brandRepository.create({name: input.name});
        return this.brandRepository.save(brand);
    }
}
