import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { ActivatedRoute } from '@angular/router';
import { productionDep } from 'src/app/productionDep';

@Component({
  selector: 'app-edit-prod-dept',
  templateUrl: './edit-prod-dept.component.html',
  styleUrls: ['./edit-prod-dept.component.css']
})
export class EditProdDeptComponent implements OnInit {
  id:any;
  production : any = [];
  prodDep =  new productionDep();
  constructor(private shared: SharedService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDep();
  }
  getDep(){
    this.shared.getProdDepById(this.id)
    .subscribe(res=>{
      this.production = res;
      this.prodDep = this.production;
    })
  }
  productionDeptUpdate(){
    this.shared.updateProductionDept(this.id, this.prodDep)
    .subscribe(res=>{

    })
  }
}
