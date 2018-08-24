import { TestBed, inject } from '@angular/core/testing';

import { EnviosService } from './envios.service';

describe('EnviosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnviosService]
    });
  });

  it('should be created', inject([EnviosService], (service: EnviosService) => {
    expect(service).toBeTruthy();
  }));
});
