import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'product',  //url path to be matched
        // path: 'products/lists',
        loadChildren: ()=> //wait until product is visible in the url , then load this data
            import('./product/product.module').then (
                a => a.ProductModule
            )
    }
];
