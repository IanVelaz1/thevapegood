import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerColeccionComponent } from './ver-coleccion.component';

describe('VerColeccionComponent', () => {
  let component: VerColeccionComponent;
  let fixture: ComponentFixture<VerColeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerColeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
