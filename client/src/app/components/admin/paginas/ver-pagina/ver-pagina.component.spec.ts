import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPaginaComponent } from './ver-pagina.component';

describe('VerPaginaComponent', () => {
  let component: VerPaginaComponent;
  let fixture: ComponentFixture<VerPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
