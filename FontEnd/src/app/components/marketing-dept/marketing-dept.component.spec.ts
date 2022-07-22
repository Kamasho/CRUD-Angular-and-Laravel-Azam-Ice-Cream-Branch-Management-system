import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDeptComponent } from './marketing-dept.component';

describe('MarketingDeptComponent', () => {
  let component: MarketingDeptComponent;
  let fixture: ComponentFixture<MarketingDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
