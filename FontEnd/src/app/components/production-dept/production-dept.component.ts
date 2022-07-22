import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductionDeptFormComponent } from 'src/app/componentForm/production-dept-form/production-dept-form.component';
@Component({
  selector: 'app-production-dept',
  templateUrl: './production-dept.component.html',
  styleUrls: ['./production-dept.component.css']
})
export class ProductionDeptComponent implements OnInit {
  ProductionsDept: any = [];
  constructor(private sharedservice: SharedService, private dialogRef: MatDialog) {
   }

  ngOnInit(): void {
    this.getProductionMember();
  }
  getProductionMember(){
    this.sharedservice.getAllProductionDept()
    .subscribe(res=>{
      this.ProductionsDept = res;
    })
  }
  openDialog(){
    this.dialogRef.open(ProductionDeptFormComponent);
  }
  deleteData(id:any){
    this.sharedservice.deleteProductionDept(id)
    .subscribe(res=>{
      this.getProductionMember();
    })
  }
}
