import { TestBed } from '@angular/core/testing';

import { CultureService } from './culture.service';

describe('CultureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CultureService = TestBed.get(CultureService);
    expect(service).toBeTruthy();
  });
});
