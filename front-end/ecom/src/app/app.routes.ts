// // import { Routes } from '@angular/router';

// // export const routes: Routes = [
// //     {
// //         path : 'product',  //url path to be matched
// //         // path: 'products/lists',
// //         loadChildren: ()=> //wait until product is visible in the url , then load this data
// //             import('./product/product.module').then (
// //                 a => a.ProductModule
// //             )
// //     }
// // ];
// import { Routes } from '@angular/router';
// import { ProductHomeComponent } from './product/product-home/product-home.component';
// import { ProductBagsComponent } from './product/product-bags/product-bags.component';

// export const routes: Routes = [
//   // { path: '', redirectTo: 'product/home', pathMatch: 'full' }, // Redirect to home by default
//   // { path: 'product/home', component: ProductHomeComponent },
//   { path: '', component: ProductHomeComponent },
//   { path: 'product/bags', component: ProductBagsComponent }
// ];
import { Routes } from '@angular/router';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductBagsComponent } from './product/product-bags/product-bags.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

// export const routes: Routes = [
//     {
//         path: '',  
//         redirectTo: 'product/home',
//         pathMatch: 'full'
//     },
//     {
//         path: 'product/home',
//         component: ProductHomeComponent
//     },
//     {
//         path: 'product/bags',
//         loadComponent: () => import('./product/product-bags/product-bags.component').then(m => m.ProductBagsComponent)
//     },
//     { 
//         path: '**', redirectTo: 'product/home'  // Catch-all for unknown routes
//     }
// ];

export const routes: Routes = [
    {
        path: '',  
        redirectTo: 'product/',
        pathMatch: 'full'
    },
    {
        path: 'product/',
        loadComponent: () => import('./product/product-home/product-home.component').then(m => m.ProductHomeComponent)
        // component: ProductHomeComponent
    },
    {
        path: 'product/bags',
        component: ProductBagsComponent
        // loadComponent: () => import('./product/product-bags/product-bags.component').then(m => m.ProductBagsComponent)
    },
    {
        path:'product/bags/1',
        component: ProductDetailComponent
    },
    { 
        path: '**', redirectTo: 'product/'  // Catch-all for unknown routes
    }
];