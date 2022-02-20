import { TestBed } from '@angular/core/testing';

import { svgService } from './svg.service';

describe('SvgService', () => {
  let service: svgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(svgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
