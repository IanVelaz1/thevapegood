import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoEspecificoComponent } from './descuento-especifico.component';

describe('DescuentoEspecificoComponent', () => {
  let component: DescuentoEspecificoComponent;
  let fixture: ComponentFixture<DescuentoEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
