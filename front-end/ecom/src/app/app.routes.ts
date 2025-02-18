import { Routes } from '@angular/router';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductBagsComponent } from './product/product-bags/product-bags.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { SubCategoryComponent } from './product/sub-category/sub-category.component';

export const routes: Routes = [
    {
        path: 'bags/:id',
        component: SubCategoryComponent
    },
    {
        path: '',
        component: ProductHomeComponent
    },
    {
        path: 'bags',
        component: ProductBagsComponent
    },
    {
        path: 'detail/:id',  // Dynamic ID for details
        component: ProductDetailComponent
    },
    { 
        path: '**', 
        redirectTo: ''  // Redirect to home if no match is found
    }
];
