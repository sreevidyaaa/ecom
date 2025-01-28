import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //typeorm has a way to  hook up the database to the back end
import { ProductEntity } from "./enitties/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])] ,
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductModule{}

