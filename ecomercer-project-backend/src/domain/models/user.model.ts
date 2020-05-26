import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import * as argon2 from 'argon2';

@ObjectType()
@Entity('user')
export class UserEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  @IsEmail()
  email: string;

  @Field()
  @Column({ default: '' })
  bio: string;

  @Field()
  @Column({ default: '' })
  image: string;

  @Field()
  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  // @ManyToMany(type => ArticleEntity)
  // @JoinTable()
  // favorites: ArticleEntity[];

  // @OneToMany(type => ArticleEntity, article => article.author)
  // articles: ArticleEntity[];
}
