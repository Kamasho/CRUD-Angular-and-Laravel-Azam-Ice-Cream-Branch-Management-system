import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDeptComponent } from './production-dept.component';

describe('ProductionDeptComponent', () => {
  let component: ProductionDeptComponent;
  let fixture: ComponentFixture<ProductionDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
