import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoComponent } from './video.component';
import { RouterTestingModule } from '@angular/router/testing';

import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { VideoService } from './../../services/video/video.service';
import { UserService } from './../../services/user/user.service';
import { HelperService } from './../../services/helper/helper.service';
import { VideoComponent } from './../../components/video/video.component';

describe('PageVideoComponent', () => {
  let component: PageVideoComponent;
  let fixture: ComponentFixture<PageVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [PageVideoComponent, VideoComponent],
      providers: [
        VideoService,
        UserService,
        HelperService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
