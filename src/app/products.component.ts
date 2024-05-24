import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "./products.service";
import { Subscription } from "rxjs";


@Component({
    selector: "app-products",
    templateUrl:'./products.component.html',
    // styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, OnDestroy{

    isDisabled=true
    productName= "A Book"
    products = ['A book', 'A Tree']
    
    productSubscription!:Subscription

    constructor(private productService:ProductService){
        setTimeout(()=>{
            this.isDisabled=false
        },3000)
        
    }

    ngOnInit(): void {
        this.products=this.productService.getProducts()
        this.productSubscription =this.productService.productUpdated.subscribe(()=>{
            this.products=this.productService.getProducts()
        })
    }

    onAddProduct(form:any){ 
        console.log(form);
        if(form.valid){
            // this.products.push(form.value.productName)
            this.productService.addProduct(form.value.productName)
        }
    }

    onRemoveProduct(productName:string){
        this.products=this.products.filter(p => p!== productName)
    }


    ngOnDestroy(): void {
        this.productSubscription.unsubscribe()
    }
}