import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDeptComponent } from './investment-dept.component';

describe('InvestmentDeptComponent', () => {
  let component: InvestmentDeptComponent;
  let fixture: ComponentFixture<InvestmentDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
