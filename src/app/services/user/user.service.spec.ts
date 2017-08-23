
import { TestBed, async, inject } from '@angular/core/testing';

import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserService } from './user.service';
import { HelperService } from './../helper/helper.service';

describe('Service: Users', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        UserService,
        HelperService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        }
      ],
    });

  });

  it('should inject the service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

});
