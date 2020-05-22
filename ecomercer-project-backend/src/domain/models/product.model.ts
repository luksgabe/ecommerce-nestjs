import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Brand } from './brand.model';
import { ProductCategory } from './productCategory.model';
import { ProductDto } from '../../app/dtos/products/products.dto';

@ObjectType()
@Entity({ name: 'product' })
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 50, nullable: false })
  name: string;

  @Field()
  @Column({ length: 100, nullable: false })
  description: string;

  @Field()
  @Column('decimal', { precision: 5, scale: 2, nullable: false })
  value: number;

  @Field()
  @Column({ nullable: false })
  color: string;

  @Field()
  @Column({ nullable: false })
  evaluation: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(
    type => Brand,
    brand => brand.products,
  )
  brand: Brand;

  @ManyToOne(
    type => ProductCategory,
    category => category.products,
  )
  category: ProductCategory;
}
