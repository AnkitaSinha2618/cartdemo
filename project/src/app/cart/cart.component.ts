import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any[] = [];
  total: any;

  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('myProduct') || '{}');
    console.log(this.products);

  }

  removeProduct(id: number) {
    const index = this.products.findIndex(x => x.product.id == id);
    this.products.splice(index, 1);
  }

  onCheckout() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i].product.price;
    }
    alert("Total Amount of your products : " + total);
  }

}
