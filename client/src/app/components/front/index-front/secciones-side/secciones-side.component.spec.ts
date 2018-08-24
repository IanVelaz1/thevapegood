import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesSideComponent } from './secciones-side.component';

describe('SeccionesSideComponent', () => {
  let component: SeccionesSideComponent;
  let fixture: ComponentFixture<SeccionesSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
