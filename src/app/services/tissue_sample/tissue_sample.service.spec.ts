import { TestBed } from '@angular/core/testing';

import { TissuesampleService } from './tissue_sample.service';

describe('TissuesampleService', () => {
  let service: TissuesampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TissuesampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});