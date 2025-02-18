import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'  //this will be maid availble if root is there
})
export class ProductService{
    apiURL = 'http://localhost:3000' ;

    constructor (private hhtp: HttpClient) {} //would only be available here

    getProducts() {                           //piping - what kind of data passes through it
        return this.hhtp.get(this.apiURL+'/product')   //get  method to get the product - now it would be 'http://localhost:3000/product'
    }

    getProductsBySubCategory(id: any){
        return this.hhtp.get(this.apiURL+'/product/category/' + id)
    }

    getProductDetailById(id:any){
        return this.hhtp.get(this.apiURL + '/product/' + id)
    }
}
