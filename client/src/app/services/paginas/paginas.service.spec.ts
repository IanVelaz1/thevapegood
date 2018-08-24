import { TestBed, inject } from '@angular/core/testing';

import { PaginasService } from './paginas.service';

describe('PaginasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginasService]
    });
  });

  it('should be created', inject([PaginasService], (service: PaginasService) => {
    expect(service).toBeTruthy();
  }));
});
