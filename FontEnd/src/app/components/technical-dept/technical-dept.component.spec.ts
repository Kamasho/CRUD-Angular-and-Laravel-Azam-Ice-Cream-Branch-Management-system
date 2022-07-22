import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDeptComponent } from './technical-dept.component';

describe('TechnicalDeptComponent', () => {
  let component: TechnicalDeptComponent;
  let fixture: ComponentFixture<TechnicalDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
