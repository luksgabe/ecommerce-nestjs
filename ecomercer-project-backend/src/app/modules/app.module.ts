import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../../domain/services/app.service';
import { ProductModule } from './product.module';
import { typeOrmConfig } from '../../infra/config/typeorm.config';
import { ConfigModule } from 'nestjs-dotenv';
import { BrandModule } from './brand.module';
import { ProductCategoryModule } from './productCategory.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    ProductModule,
    BrandModule,
    ProductCategoryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
