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
import { ProductType } from './productType.model';
import { ProductDto } from '../../app/dtos/products.dto';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false })
  description: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: false })
  value: number;

  @Column({ nullable: false })
  color: string;

  @Column({ nullable: false })
  evaluation: number;

  @ManyToOne(
    type => Brand,
    brand => brand.products,
  )
  public brand: Brand;

  @ManyToOne(
    type => ProductCategory,
    category => category.products,
  )
  public category: ProductCategory;

  @ManyToOne(
    type => ProductType,
    category => category.products,
  )
  public type: ProductType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
