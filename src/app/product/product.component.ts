import { Component,Input,EventEmitter,Output } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() productName!:string
  @Output() productClicked= new EventEmitter()

  constructor( private productService:ProductService){}

  onClicked(){
    // this.productClicked.emit()
    this.productService.deleteProduct(this.productName)
  }
}
