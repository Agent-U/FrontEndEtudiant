import { TestBed } from '@angular/core/testing';
import { Incident } from '../incident';

import { IncidentsService } from './incidents.service';

describe('IncidentsService', () => {
  let service: IncidentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
