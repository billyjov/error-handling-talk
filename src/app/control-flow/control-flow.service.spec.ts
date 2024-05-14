import { TestBed } from '@angular/core/testing';

import { ControlFlowService } from './control-flow.service';

describe('ControlFlowService', () => {
  let service: ControlFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
