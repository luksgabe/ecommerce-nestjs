import { Brand } from '../../domain/models/brand.model';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {}
