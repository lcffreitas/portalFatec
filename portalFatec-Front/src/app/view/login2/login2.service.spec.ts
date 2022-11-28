import { TestBed } from '@angular/core/testing';

import { Login2Service } from '../login2/login2.service';

describe('Login2Service', () => {
  let service: Login2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
