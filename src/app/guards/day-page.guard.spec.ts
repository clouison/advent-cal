import { TestBed } from '@angular/core/testing';

import { DayPageGuard } from './day-page.guard';

describe('DayPageGuard', () => {
  let guard: DayPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DayPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
