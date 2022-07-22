import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdDeptComponent } from './edit-prod-dept.component';

describe('EditProdDeptComponent', () => {
  let component: EditProdDeptComponent;
  let fixture: ComponentFixture<EditProdDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProdDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
