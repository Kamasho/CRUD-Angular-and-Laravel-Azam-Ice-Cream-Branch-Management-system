import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDeptFormComponent } from './production-dept-form.component';

describe('ProductionDeptFormComponent', () => {
  let component: ProductionDeptFormComponent;
  let fixture: ComponentFixture<ProductionDeptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionDeptFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionDeptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
