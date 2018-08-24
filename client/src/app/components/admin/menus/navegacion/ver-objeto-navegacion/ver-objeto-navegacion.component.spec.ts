import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerObjetoNavegacionComponent } from './ver-objeto-navegacion.component';

describe('VerObjetoNavegacionComponent', () => {
  let component: VerObjetoNavegacionComponent;
  let fixture: ComponentFixture<VerObjetoNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerObjetoNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerObjetoNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
