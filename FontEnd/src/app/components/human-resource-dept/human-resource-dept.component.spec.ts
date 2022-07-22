import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceDeptComponent } from './human-resource-dept.component';

describe('HumanResourceDeptComponent', () => {
  let component: HumanResourceDeptComponent;
  let fixture: ComponentFixture<HumanResourceDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourceDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourceDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
