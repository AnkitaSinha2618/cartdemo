import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public search: string = "";
  myProducts: any = [];

  products = [
    { id: 1, proimg: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", brand: 'Lenevo', name: 'Laptop', price: 40000 },
    { id: 2, proimg: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80", brand: 'Sony', name: 'TV', price: 25000 },
    { id: 3, proimg: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", brand: 'LG', name: 'Washing Machine', price: 35000 },
    { id: 4, proimg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", brand: 'Samsung', name: 'Mobile', price: 40000 },
    { id: 5, proimg: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnZXJhdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", brand: 'LG', name: 'Refrigerator', price: 60000 },
    { id: 6, proimg: "https://images.unsplash.com/photo-1572279990716-4f8343703ed6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", brand: 'LG', name: 'Oven', price: 40000 },
    { id: 7, proimg: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80", brand: 'RealMe', name: 'Headphone', price: 12000 },
    { id: 8, proimg: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80", brand: 'Lenevo', name: 'Tablet', price: 38000 }
  ]

  addToCart(product: any) {
    this.myProducts.push({
      product
    });
  }

  goToCart() {
    localStorage.setItem('myProduct', JSON.stringify(this.myProducts));
    this.router.navigate(['cart'])
  }

}
