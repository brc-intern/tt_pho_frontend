import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistproductComponent } from './adminlistproduct.component';

describe('AdminlistproductComponent', () => {
  let component: AdminlistproductComponent;
  let fixture: ComponentFixture<AdminlistproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlistproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
