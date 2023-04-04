import { Component, OnInit } from '@angular/core';
import { MedService } from '../med.service';
import { Med } from '../med';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
   meds:Med[]=[];
  constructor(private mservice:MedService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params.searchTerm)
      {
        this.meds=this.mservice.getAll().filter(med=>med.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
      }
      else{
        this.meds=this.mservice.getAll();
      }
    })

  }


}
