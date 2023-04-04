import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
result:any;
  meds:Medicine[];
  constructor(private medservice:MedicineService,
    private router:Router) { }

  ngOnInit(): void {
    this.getMedicineList();
  }
  
 private getMedicineList()
 {
  this.medservice.getMedicineList().subscribe(data=>{
    this.meds=data;
    console.log(data);
  });
 }

 private delete(id:number)
 {
this.medservice.deleteMed(id).subscribe( data=>{
  alert("Deleted succssfully");
  console.log(data);
});
 }

 private getmedbyId(id:number)
 {
 this.medservice.getmedbyid(id).subscribe(data=>{
this.result=data;
console.log(this.result);
alert("The medicine details are : " +  "       " +
"Medicine name - "+this.result.mname + "       " +
"Medicine description - " + this.result.mdesc + "       " +
"Medicine price - " +this.result.mprice + "       " +
"Medicine Seller - " + this.result.mseller
);

 });
 }
 
 private addmed()
{
  this.router.navigate(['adminhome/medadd']);
}

}
