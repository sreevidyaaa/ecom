// import { Component, DEFAULT_CURRENCY_CODE, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { ProductService } from '../services/product-service';
// import { CommonModule } from '@angular/common';

// declare var paypal:any; //rule


// @Component({
//   selector: 'app-product-detail',
//   imports: [CommonModule, RouterModule],
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css'] 
// })
// export class ProductDetailComponent implements OnInit {

//   @ViewChild('paypal', {static:true})
//   paypalElement: any

//   product : any
//   constructor(private activatedRoute: ActivatedRoute,
//     public productService: ProductService
//   ) {

//   }
//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe(url => {
//       console.log('url', url['id'])

//       this.productService.getProductDetailById(url['id'])
//       .subscribe(data => {
//         console.log('data',data)
//         this.product = data
//       })
//     })


//     paypal.Buttons({
//       style:{
//         shape: 'rect',
//         color: 'gold',
//         layout: 'vertical',
//         label: 'paypal',
//       },
//       createOrder: (data:any, actions: any)=>{
//         return actions.order.create({
//           name: this.product.brands, //products already contian the data ie in line np:33
//           description: this.product.description,
//           purchase_units:[{ //provided by paypal
//             amount: {
//               currency_code: 'USD',
//               value: this.product.price
//             }
//           }]
//         })
//       },

//       //the errors like buyer cancels, transaction denied, failed etc

//       onApprove: async( data:any, actions: any)=>{
//         const order = await actions.order.capture()
//         console.timeLog('order', order)
//       },

//       onCancel: (data:any, actions: any)=>{
//         return actions.redirect('/')
//       },

//       onError: (err: any)=>{
//         console.log('Error:', err)
//       }


//     }).render(this.paypalElement.nativeElement)
//   }

// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../services/product-service';
import { CommonModule } from '@angular/common';

declare var paypal: any; // Declaring PayPal SDK globally

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('paypal', { static: true })
  paypalElement: any;

  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    // Getting the product ID from the URL
    this.activatedRoute.params.subscribe(params => {
      console.log('URL Param (Product ID):', params['id']);

      // Fetch product details using the service
      this.productService.getProductDetailById(params['id'])
        .subscribe(data => {
          console.log('Product Data:', data);
          this.product = data;
          this.initializePayPalButton(); // Initialize PayPal after product data is set
        });
    });
  }

  initializePayPalButton(): void {
    if (!this.product) {
      console.error('Product data is not loaded yet.');
      return;
    }

    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'USD', // Use USD if INR is not supported
              value: this.product.price
            }
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        console.time('order'); // Start timer
        try {
          const order = await actions.order.capture();
          console.timeLog('order', order); // Log time and order details
          console.timeEnd('order'); // Stop timer
        } catch (error) {
          console.error('Error capturing order:', error);
        }
      },
      onCancel: (data: any) => {
        console.log('Payment canceled by the user', data);
      },
      onError: (err: any) => {
        console.error('PayPal Error:', err);
      }
    }).render(this.paypalElement.nativeElement);
  
  }}