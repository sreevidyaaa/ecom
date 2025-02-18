import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { get } from 'http';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

//   @Get()
//   getHello(): string {
//     return this.ProductService.getHello();
//   }

    @Post()
    create(@Body() CreateProductDto: CreateProductDto){
        return this.ProductService.create(CreateProductDto)
    }

    @Get()
    findAll() {
        return this.ProductService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string ){
        return this.ProductService.findOne(id);
    }
    

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
                // here the id passed in the http request gets stored in id ,i.e, localhost:2000/12345
                //here the update info is being compied into the updateProductDto variable eg: title :"something"
                //these are passed to productservice which does logiacal operations
                //id is passed and id:string specifies the type for the id
        return this.ProductService.update(id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.ProductService.remove(id);
    }

    @Get('category/:id') //specifies the id of the sub category
    findCategory(@Param('id') id:string){ 
        console.log(id)
        return this.ProductService.findProductBycategory(id)
    }
}
