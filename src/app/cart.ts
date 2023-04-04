import { CartItem } from "./cart-item";

export class Cart {
items:CartItem[]=[];

getTotalPrice():number
{let totalPrice=0;
    this.items.forEach(item => {
        totalPrice =+ item.Price;
    });
return totalPrice;
}


}
