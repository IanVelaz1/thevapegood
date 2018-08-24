import { TestBed, inject } from '@angular/core/testing';

import { SubirFotosService } from './subir-fotos.service';

describe('SubirFotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubirFotosService]
    });
  });

  it('should be created', inject([SubirFotosService], (service: SubirFotosService) => {
    expect(service).toBeTruthy();
  }));
});
