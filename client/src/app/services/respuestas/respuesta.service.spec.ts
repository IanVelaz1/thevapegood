import { TestBed, inject } from '@angular/core/testing';

import { RespuestaService } from './respuesta.service';

describe('RespuestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RespuestaService]
    });
  });

  it('should be created', inject([RespuestaService], (service: RespuestaService) => {
    expect(service).toBeTruthy();
  }));
});
