import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product') //inside database it will be called a product 

export class ProductEntity {

    @PrimaryGeneratedColumn('uuid') //generates primary column with number automatically generated with incrementing style
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    description: string;

    @Column('text')
    imgUrl1: string

    @Column() //for number no need to specify in this 
    price: number

    @Column() 
    quantity: number

    @Column('text')
    size: string

    @Column('text')
    color: string

    @Column('text')
    shippings: string

    @Column('text')
    sex: string

    @Column('text')
    brands: string

    @Column('text')
    category:  string

    @Column('text',{nullable: true})
    subcategory:  string
    
}