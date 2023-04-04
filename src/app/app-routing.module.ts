import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LogoutComponent } from './logout/logout.component';
import { MedaddComponent } from './medadd/medadd.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedpageComponent } from './medpage/medpage.component';
import { PaymentComponent } from './payment/payment.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"userhome",component:UserHomeComponent},
  {path:"search/:searchTerm",component:UserHomeComponent},
  {path:"cartpage/payment",component:PaymentComponent},
  {path:"adminhome/medicine",component:MedicineComponent},
  {path:"adminhome/medadd",component:MedaddComponent},
  {path:'cartpage',component:CartPageComponent},
  {path:"cartpage/payment/logout",component:LogoutComponent},
  {path:"adminhome/medadd/logout",component:LogoutComponent},
  {path:"adminhome/medicine/logout",component:LogoutComponent},
  {path:"med/:id",component:MedpageComponent},
  {path:"adminhome", component:AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
