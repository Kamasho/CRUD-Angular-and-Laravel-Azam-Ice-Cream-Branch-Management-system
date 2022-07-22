import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HumanResourceDeptComponent } from './components/human-resource-dept/human-resource-dept.component';
import { InvestmentDeptComponent } from './components/investment-dept/investment-dept.component';
import { MarketingDeptComponent } from './components/marketing-dept/marketing-dept.component';
import { ProductionDeptComponent } from './components/production-dept/production-dept.component';
import { EditProdDeptComponent } from './components/edit-prod-dept/edit-prod-dept.component';

import { TechnicalDeptComponent } from './components/technical-dept/technical-dept.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"investment-dept", component:InvestmentDeptComponent},
  {path:"marketing-dept", component:MarketingDeptComponent},
  {path:"technical-dept", component:TechnicalDeptComponent},
  {path:"HumRes-dept", component:HumanResourceDeptComponent},
  {path:"production-dept", component:ProductionDeptComponent},
  {path:'edit/:id', component:EditProdDeptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
