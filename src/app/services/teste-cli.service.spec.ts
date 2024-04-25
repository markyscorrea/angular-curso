import { TestBed } from '@angular/core/testing';

import { TesteCliService } from './teste-cli.service';

describe('TesteCliService', () => {
  let service: TesteCliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteCliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
