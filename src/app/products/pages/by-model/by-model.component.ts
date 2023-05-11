import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'product-by-model',
  templateUrl: './by-model.component.html',
  styleUrls: ['./by-model.component.css']
})
export class ByModelComponent {

  public products: Product[] = [];

  constructor(private productService: ProductService){}

  searchByModel ( term: string ):void {
    this.productService.searchProductByModel(term).subscribe( products =>{
        this.products = products;
        console.log(products);
    });
  }


}
