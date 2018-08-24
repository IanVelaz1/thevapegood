import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEspecificoComponent } from './menu-especifico.component';

describe('MenuEspecificoComponent', () => {
  let component: MenuEspecificoComponent;
  let fixture: ComponentFixture<MenuEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
