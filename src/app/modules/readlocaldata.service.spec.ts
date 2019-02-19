import { TestBed } from '@angular/core/testing';

import { ReadlocaldataService } from './readlocaldata.service';

describe('ReadlocaldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadlocaldataService = TestBed.get(ReadlocaldataService);
    expect(service).toBeTruthy();
  });
});
