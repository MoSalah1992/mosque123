/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrivateFilesService } from './PrivateFiles.service';

describe('Service: PrivateFiles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateFilesService]
    });
  });

  it('should ...', inject([PrivateFilesService], (service: PrivateFilesService) => {
    expect(service).toBeTruthy();
  }));
});
