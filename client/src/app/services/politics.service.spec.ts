import { TestBed } from '@angular/core/testing';

import { PoliticsService } from './politics.service';

describe('PoliticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliticsService = TestBed.get(PoliticsService);
    expect(service).toBeTruthy();
  });
});
