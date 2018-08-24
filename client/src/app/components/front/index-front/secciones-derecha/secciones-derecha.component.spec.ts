import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesDerechaComponent } from './secciones-derecha.component';

describe('SeccionesDerechaComponent', () => {
  let component: SeccionesDerechaComponent;
  let fixture: ComponentFixture<SeccionesDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
