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

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    ProductModule,
    BrandModule,
    ProductCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
