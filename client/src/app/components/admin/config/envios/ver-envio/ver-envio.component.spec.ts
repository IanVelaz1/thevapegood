import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEnvioComponent } from './ver-envio.component';

describe('VerEnvioComponent', () => {
  let component: VerEnvioComponent;
  let fixture: ComponentFixture<VerEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
