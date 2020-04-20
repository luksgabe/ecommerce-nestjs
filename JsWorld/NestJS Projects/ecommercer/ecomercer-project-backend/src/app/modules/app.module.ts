import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app/controllers/app.controller';
import { AppService } from 'src/domain/services/app.service';
import { ProductModule } from './product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
