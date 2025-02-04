import {  NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { ProductHomeComponent } from "./product-home/product-home.component";

const routes : Routes = [
    {
        path : 'lists',
        component : ProductHomeComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class ProductRoutingModule {}
