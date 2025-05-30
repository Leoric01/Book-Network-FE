import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { HttpTokenInterceptor } from './http-token.interceptor';

describe('HttpTokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpTokenInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpTokenInterceptor =
      TestBed.inject(HttpTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
