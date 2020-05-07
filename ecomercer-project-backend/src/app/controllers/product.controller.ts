import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductDto } from '../dtos/products.dto';
import { ProductService } from '../../domain/services/product.service';
import { AppController } from './app.controller';

@Controller('products')
export class ProductController extends AppController {
  constructor(private readonly productService: ProductService) {
    super();
  }

  @Get()
  async getProducts(): Promise<Array<ProductDto>> {
    return await this.productService.getAllProducts();
  }

  @Post()
  create(@Body() productDto: ProductDto) {
    return this.productService.create(productDto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return `we get the product with the id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `we update the product with the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `we delete the product with the id ${id}`;
  }
}
