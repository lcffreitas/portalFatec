import { TestBed } from '@angular/core/testing';

import { PostnoticiaService } from './postnoticia.service';

describe('PostnoticiaService', () => {
  let service: PostnoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostnoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
