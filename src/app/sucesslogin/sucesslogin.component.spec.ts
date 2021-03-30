import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessloginComponent } from './sucesslogin.component';

describe('SucessloginComponent', () => {
  let component: SucessloginComponent;
  let fixture: ComponentFixture<SucessloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
