import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMenusComponent } from './ver-menus.component';

describe('VerMenusComponent', () => {
  let component: VerMenusComponent;
  let fixture: ComponentFixture<VerMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
