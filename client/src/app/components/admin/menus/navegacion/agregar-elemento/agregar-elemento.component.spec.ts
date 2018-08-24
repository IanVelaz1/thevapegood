import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarElementoComponent } from './agregar-elemento.component';

describe('AgregarElementoComponent', () => {
  let component: AgregarElementoComponent;
  let fixture: ComponentFixture<AgregarElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
