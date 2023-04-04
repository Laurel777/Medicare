import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart; 
  constructor(private cartservice:CartService) {
    this.setCart();
   }



  ngOnInit(): void {
  }
setCart()
{
  this.cart=this.cartservice.getCart();
}

removefromCart(cartItem:CartItem)
{
this.cartservice.removefromCart(cartItem.med.id);
this.setCart();
}

changeQuantity(cartItem:CartItem, quanttyinString:string)
{const quantity= parseInt(quanttyinString);
  this.cartservice.changeQuantity(cartItem.med.id, quantity);
  this.setCart();
}
}
