import { TestBed } from '@angular/core/testing';

import { ServisService } from './servis.service';

describe('ServisService', () => {
  let service: ServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
