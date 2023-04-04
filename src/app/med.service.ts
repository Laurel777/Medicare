import { Injectable } from '@angular/core';
import { Med } from './med';
@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor() { }
   getmedbyid(id:number):Med
   {
return this.getAll().find(med=> med.id == id);
   }
  getAll():Med[]{
    return [
     {id:1,
      name:'Cousyls',
      price:390,
      imageUrl:'/assets/images/Screenshot (165).png',
      desc:'This medicine is for cough'
     }
,
{id:2,
  name:'Okacet',
  price:250,
  imageUrl:'/assets/images/Screenshot (166).png',
  desc:'This medicine is for cold'
 }
 ,
{id:3,
  name:'Lomofen',
  price:790,
  imageUrl:'/assets/images/Screenshot (167).png',
  desc:'This medicine is for loose motions'
 }
 ,
{id:4,
  name:'Paracetamol',
  price:190,
  imageUrl:'/assets/images/Screenshot (168).png',
  desc:'This medicine is for fever'
 }
 ,
{id:5,
  name:'Combliflam',
  price:990,
  imageUrl:'/assets/images/Screenshot (169).png',
  desc:'This medicine is for head-ache'
 }
 ,
{id:6,
  name:'Tooth gel',
  price:1290,
  imageUrl:'/assets/images/Screenshot (170).png',
  desc:'This medicine is for toothe-ache'
 }
    ]
  }
}
