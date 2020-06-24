import { TestBed } from '@angular/core/testing';

import { RepresentativesService } from './representatives.service';

describe('RepresentativesService', () => {
  let service: RepresentativesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentativesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
