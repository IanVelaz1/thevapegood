import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFrontComponent } from './nav-front.component';

describe('NavFrontComponent', () => {
  let component: NavFrontComponent;
  let fixture: ComponentFixture<NavFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
