import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdateproductComponent } from './adminupdateproduct.component';

describe('AdminupdateproductComponent', () => {
  let component: AdminupdateproductComponent;
  let fixture: ComponentFixture<AdminupdateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdateproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
