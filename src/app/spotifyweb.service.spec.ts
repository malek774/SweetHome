import { TestBed } from '@angular/core/testing';

import { SpotifywebService } from './spotifyweb.service';

describe('SpotifywebService', () => {
  let service: SpotifywebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifywebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
