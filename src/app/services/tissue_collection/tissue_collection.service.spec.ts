import { TestBed } from '@angular/core/testing';

import { TissuecollectionService } from './tissue_collection.service';

describe('TissuecollectionService', () => {
  let service: TissuecollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TissuecollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});