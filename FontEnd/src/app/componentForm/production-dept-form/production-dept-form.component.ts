import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductionDept } from 'src/app/production-dept';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-production-dept-form',
  templateUrl: './production-dept-form.component.html',
  styleUrls: ['./production-dept-form.component.css']
})
export class ProductionDeptFormComponent implements OnInit {
  productionDept:any = [];
  production = new ProductionDept();

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }
  insertProduction(){
    this.sharedService.addProductionDept(this.production)
    .subscribe(res=>{
      this.getProdDeplist();
    })
  }
  getProdDeplist(){
    this.sharedService.getAllProductionDept()
    .subscribe(res=>{
      this.productionDept = res;
    })
  }

}
