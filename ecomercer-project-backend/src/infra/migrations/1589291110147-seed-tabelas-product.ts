import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { BrandsSeed } from '../seeds/brands.seeds';
import { ProductCategorySeed } from '../seeds/productCategory.seeds';


export class SeedTabelasProduct1589291110147 implements MigrationInterface {
   
    

    public async up(queryRunner: QueryRunner): Promise<any> {
        const brandRepository = await getRepository("brand");
        const brands = await brandRepository.save(BrandsSeed);

        const categoryRepository = await getRepository("product_category");
        const category = await categoryRepository.save(ProductCategorySeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
