import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductDto } from 'src/app/dtos/products.dto';



@Controller('products')
export class ProductController {

    @Get('')
    getProducts() {
        return "All Products";
    }

    @Post()
    create(@Body() product: ProductDto) {
        return product;
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return `we get the dog with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the dog with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the dog with the id ${id}`;
    }
}