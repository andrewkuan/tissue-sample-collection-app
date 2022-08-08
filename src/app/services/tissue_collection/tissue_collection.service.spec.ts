import { TestBed } from '@angular/core/testing';

import { TissueCollectionService } from './tissue_collection.service';

describe('TissueCollectionService', () => {
  let service: TissueCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TissueCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});