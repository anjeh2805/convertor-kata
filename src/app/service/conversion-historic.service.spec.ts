import { TestBed } from '@angular/core/testing';

import { ConversionHistoricService } from './conversion-historic.service';

describe('ConversionHistoricService', () => {
  let service: ConversionHistoricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionHistoricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
