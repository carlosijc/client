import { TestBed } from '@angular/core/testing';

import { FetchWinnerService } from './fetch-winner.service';

describe('FetchWinnerService', () => {
  let service: FetchWinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
