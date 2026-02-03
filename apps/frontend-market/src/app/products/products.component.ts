import { afterNextRender, Component, inject } from '@angular/core';
import { ProductStore } from '../stores/product.store';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule, JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productStore = inject(ProductStore);

  constructor(){
    afterNextRender(()=>{
      this.productStore.loadProduct();
    })
  }
}
