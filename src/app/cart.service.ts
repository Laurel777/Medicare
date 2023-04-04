import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { CartItem} from './cart-item';
import { Med } from './med';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();


addtoCart(med:Med):void
{
let cartItem =this.cart.items.find(item =>item.med.id === med.id);
if(cartItem)
{
this.changeQuantity(med.id , cartItem.quantity +1);
return;
}
this.cart.items.push(new CartItem(med)); 
}

removefromCart(medId:number):void{
this.cart.items=
this.cart.items.filter(item => item.med.id != medId);
}

changeQuantity(medId:number, quantity:number):void{
let cartItem=this.cart.items.find(item => item.med.id ==medId);
if(!cartItem)return;
cartItem.quantity=quantity;
}

getCart():Cart{
  return this.cart;
}

}
