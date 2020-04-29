import { TestBed } from '@angular/core/testing';

import { WebplaybackService } from './webplayback.service';

describe('WebplaybackService', () => {
  let service: WebplaybackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebplaybackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
