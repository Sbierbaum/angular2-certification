import { TestBed } from '@angular/core/testing';

import { DataSavingService } from './data-saving.service';

describe('DataSavingService', () => {
  let service: DataSavingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSavingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
