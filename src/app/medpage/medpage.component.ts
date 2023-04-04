import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Med } from '../med';
import { MedService } from '../med.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-medpage',
  templateUrl: './medpage.component.html',
  styleUrls: ['./medpage.component.css']
})
export class MedpageComponent implements OnInit {
med:Med;
  constructor(private route:ActivatedRoute,
    private mservice:MedService,
    private cartservice:CartService,
    private router:Router) { 
     
      route.params.subscribe((params)=>{
if(params.id)
this.med=mservice.getmedbyid(params.id);
      })
    }

  ngOnInit(): void {
  }
 addtoCart()
 {this.cartservice.addtoCart(this.med);
  this.router.navigateByUrl('/cartpage');

 }
}
