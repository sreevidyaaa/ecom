// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../services/product-service';
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// // import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule


// @Component({
//   selector: 'app-product-list',
//   standalone: true, // Marking it as a standalone component
//   imports: [HttpClientModule], // Adding HttpClientModule to the imports
//   // imports: [provideHttpClient], // Adding HttpClientModule to the imports

//   // imports: [],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent implements OnInit {

//   constructor(public productService : ProductService) {}
  
//   ngOnInit() : void{
//     this.loadProducts()    //function call
    
//   }
//   loadProducts(){
//     return this.productService.getProducts().subscribe(
//       (data: any) =>  console.log ('data: ',data)  //anytype     cosole.log to get back the data
//     )
//   }
// }



import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //  Import CUSTOM_ELEMENTS_SCHEMA


@Component({
  selector: 'app-product-home',
  standalone: true,         //ensured that the ProductListComponent  is a standone component 
  // imports: [],
  imports: [CommonModule], 
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
  providers: [ProductService],  // Only include ProductService
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductHomeComponent implements OnInit {
  products :any;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any) => this.products = data     //after acquring data into the varibale data from the backend , we are putting it back into the products
      // console.log('Data:', data);          //displayed data in the console
    );
  }
}

