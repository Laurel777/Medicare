 import { Med } from "./med";
 export class CartItem {
constructor(med:Med){
this.med=med;

}
    
    med:Med;
    quantity:number=1;

get Price():number
{
return this.med.price * this.quantity;
}

}
