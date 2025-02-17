import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, UpdateQueryBuilder } from 'typeorm';
import { ProductEntity } from './enitties/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { find } from 'rxjs';

@Injectable()
export class ProductService {
//   getHello(): string {
//     return 'Hello World!';
//   }

    constructor(
        @InjectRepository(ProductEntity) //dependency injection 
        private productRepository: Repository<ProductEntity>
    ) {}

    async create(createProductDto: CreateProductDto){
        // return 'This action adds a new product'
        const{title, description, imgUrl1} = createProductDto   // Destructuring the DTO
    
        // Create a new Product entity with the data provided in the DTO
        const newProduct = await this.productRepository.create({
            ...createProductDto  // Spread operator to copy all the properties of the DTO
        })

        await this.productRepository.save(newProduct) // Save the new product to the database

        return newProduct;  // Return the newly created product

    }


    async findAll()
    {
        return await this.productRepository.find()          //this means inside the class

    }

    // async findOne (id: string){
    //     // return 'This action returns a #${id} product';
    //     const findProduct  = await this.productRepository.findOne({where: {id}}) //findOne is in productReposistory
        
    //     if(!findProduct){
    //         throw new HttpException("Product not found !!",HttpStatus.NOT_FOUND)
    //     }

    //     return findProduct;
    // }
    async findOne(id: string) {
        const findProduct = await this.productRepository.findOne({ where: { id } });
    
        if (!findProduct) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }
    
        return findProduct; // Directly returning the object instead of an array
    }
    



    async update(id:string , updateProductDto: UpdateProductDto) {
        // return 'This action updates a #${id} product ';
        const{title, 
            description,
            imgUrl1, 
            price, 
            quantity, 
            size, 
            color, 
            shippings, 
            sex, 
            brands, 
            category,
            subcategory }= updateProductDto ; 

            const findProduct = await this.productRepository.findOne({ where: { id } })

            if(!findProduct){
                throw new HttpException('No product found', HttpStatus.NOT_FOUND)
            }

            let updateProduct : any = {}        //declaring setting the dattype to any since it might me number / string etc
            
            title && (updateProduct.title = title);
                //$$ if soemthing is true excecute 
                //      ie if exists then implement (updateProduct.title = title)
            description && (updateProduct.description = description);
            imgUrl1 && (updateProduct.imgUrl1 = imgUrl1);
            price && (updateProduct.price= price);
            quantity && (updateProduct.quantity= quantity);
            size && (updateProduct.size = size);
            color &&(updateProduct.color= color);
            shippings && (updateProduct.shippings=shippings);
            sex && (updateProduct.sex = sex);
            brands && (updateProduct.brands = brands);
            category && (updateProduct.category= category);
            subcategory && (updateProduct.subcategory= subcategory);


            await this.productRepository.update(id,  updateProduct); 

            const findProductAgain = await this.productRepository.findOne({where:{id}});

            return findProductAgain;

    }

    //in postman localhost:3000/product/65442c17-3d3f-41e4-abda-eef068419968
    async remove(id: string){
        // return 'This action removes a #${id} product';
        const findProduct = await this.productRepository.findOne({ where: { id } });
        // const findProduct = await this.productRepository.findOne({id: id}) //make sure if it exist in the database
                                                                        //{id:id} - {id in the database , id value passed in remove(id :string)}
        
        if (!findProduct) {
            throw new HttpException('No product Found!!', HttpStatus.NOT_FOUND)
        }

        //if there is product..continue to the next line wihtout throwing error
        await this.productRepository.remove(findProduct)

        return 'Product is deleted' 
        //or
        // return id
    }
}
