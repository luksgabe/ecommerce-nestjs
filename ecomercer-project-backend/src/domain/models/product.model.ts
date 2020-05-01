import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 100, nullable: false })
    description: string;

    @Column("decimal", { precision: 5, scale: 2, nullable: false },)
    value: number;

    @Column({ nullable: false })
    color: string;

    @Column({ nullable: false })
    evaluation: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}
