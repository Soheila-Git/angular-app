import { TestBed, inject } from '@angular/core/testing';

import { MyShareLibService } from './my-share-lib.service';

describe('MyShareLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyShareLibService]
    });
  });

  it('should be created', inject([MyShareLibService], (service: MyShareLibService) => {
    expect(service).toBeTruthy();
  }));
});
