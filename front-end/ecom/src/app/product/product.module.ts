// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductRoutingModule } from './product-routing.module';
// // import { ProductListComponent } from './product-list/product-list.component';



// @NgModule({
//   // declarations: [
//   //   ProductListComponent         since it is standalone we need not declare
//   // ],
//   imports: [
//     CommonModule,
//     ProductRoutingModule
//   ]
// })
// export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
