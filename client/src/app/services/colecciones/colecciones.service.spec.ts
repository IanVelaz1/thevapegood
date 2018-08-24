import { TestBed, inject } from '@angular/core/testing';

import { ColeccionesService } from './colecciones.service';

describe('ColeccionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColeccionesService]
    });
  });

  it('should be created', inject([ColeccionesService], (service: ColeccionesService) => {
    expect(service).toBeTruthy();
  }));
});
