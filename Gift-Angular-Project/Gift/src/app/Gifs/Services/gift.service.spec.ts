import { TestBed } from '@angular/core/testing';

import { GifsService } from './gift.service';

describe('GiftService', () => {
  let service: GifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
