import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InvestmentDeptComponent } from './components/investment-dept/investment-dept.component';
import { MarketingDeptComponent } from './components/marketing-dept/marketing-dept.component';
import { TechnicalDeptComponent } from './components/technical-dept/technical-dept.component';
import { HumanResourceDeptComponent } from './components/human-resource-dept/human-resource-dept.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductionDeptComponent } from './components/production-dept/production-dept.component';
import { ProductionDeptFormComponent } from './componentForm/production-dept-form/production-dept-form.component';
import { FormsModule } from '@angular/forms';
import { EditProdDeptComponent } from './components/edit-prod-dept/edit-prod-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvestmentDeptComponent,
    MarketingDeptComponent,
    TechnicalDeptComponent,
    HumanResourceDeptComponent,
    ProductionDeptComponent,
    ProductionDeptFormComponent,
    EditProdDeptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
