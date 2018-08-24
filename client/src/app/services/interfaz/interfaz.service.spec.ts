import { TestBed, inject } from '@angular/core/testing';

import { InterfazService } from './interfaz.service';

describe('InterfazService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterfazService]
    });
  });

  it('should be created', inject([InterfazService], (service: InterfazService) => {
    expect(service).toBeTruthy();
  }));
});
