import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionEspecificaComponent } from './coleccion-especifica.component';

describe('ColeccionEspecificaComponent', () => {
  let component: ColeccionEspecificaComponent;
  let fixture: ComponentFixture<ColeccionEspecificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeccionEspecificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
