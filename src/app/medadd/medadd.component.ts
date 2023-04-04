import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medadd',
  templateUrl: './medadd.component.html',
  styleUrls: ['./medadd.component.css']
})
export class MedaddComponent implements OnInit {

  constructor(private medservice:MedicineService) { }

  ngOnInit(): void {
  }
  
  addmed()
  {
    alert("Medicine details added successfully");
  }


}
