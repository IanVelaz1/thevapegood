import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEnvioComponent } from './agregar-envio.component';

describe('AgregarEnvioComponent', () => {
  let component: AgregarEnvioComponent;
  let fixture: ComponentFixture<AgregarEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
