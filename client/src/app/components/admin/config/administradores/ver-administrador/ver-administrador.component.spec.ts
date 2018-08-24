import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAdministradorComponent } from './ver-administrador.component';

describe('VerAdministradorComponent', () => {
  let component: VerAdministradorComponent;
  let fixture: ComponentFixture<VerAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
