import { TestBed } from '@angular/core/testing';

import { TraversalService } from './traversal.service';

describe('TraversalService', () => {
  let service: TraversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
