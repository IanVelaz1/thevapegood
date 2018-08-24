import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesCarouselComponent } from './secciones-carousel.component';

describe('SeccionesCarouselComponent', () => {
  let component: SeccionesCarouselComponent;
  let fixture: ComponentFixture<SeccionesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
