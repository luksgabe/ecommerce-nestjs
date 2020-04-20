import { Entity, Column } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class Product extends BaseModel {

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 100, nullable: false })
    description: string;

    @Column({ nullable: false })
    value: number;

    @Column({ nullable: false })
    color: number;

    @Column({ nullable: false })
    evaluation: number;
}
