import { TestBed, inject } from '@angular/core/testing';

import { VisitasService } from './visitas.service';

describe('VisitasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitasService]
    });
  });

  it('should be created', inject([VisitasService], (service: VisitasService) => {
    expect(service).toBeTruthy();
  }));
});
