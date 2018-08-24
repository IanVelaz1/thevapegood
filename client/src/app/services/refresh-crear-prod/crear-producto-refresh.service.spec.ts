import { TestBed, inject } from '@angular/core/testing';

import { CrearProductoRefreshService } from './crear-producto-refresh.service';

describe('CrearProductoRefreshService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearProductoRefreshService]
    });
  });

  it('should be created', inject([CrearProductoRefreshService], (service: CrearProductoRefreshService) => {
    expect(service).toBeTruthy();
  }));
});
