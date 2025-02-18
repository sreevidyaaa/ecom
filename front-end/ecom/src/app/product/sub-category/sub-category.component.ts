import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { TitleTransformPipe } from '../title.transform.pipe';

@Component({
  selector: 'app-sub-category',
  imports: [CommonModule,TitleTransformPipe,RouterModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css',
})
export class SubCategoryComponent implements OnInit{
  public href: string ="";
  // subCategory: any;
  subProducts: any;
  routeName:  any; //so that it wont be repeated multiple times and we are just fetching the title 
  constructor(private activatedRoute: ActivatedRoute,
    public productService : ProductService
  ){
    
  }
  ngOnInit(): void {  //ngOnInit rnss very very early 
    this.activatedRoute.params.subscribe(  //subscribe means always listening
      // data => console.log('data',data,data['id']) //data['id'] - gets what is inside the id
      (data:any) => {
        console.log('data', data['id'])
        this.routeName = data['id']
        this.productService.getProductsBySubCategory(data['id'])
        .subscribe(
          products =>{
            console.log('products',products)
            this.subProducts = products
        }
      )
      }
    )
  }
}
