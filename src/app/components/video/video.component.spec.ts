import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VideoComponent } from './video.component';
import { VideoService } from './../../services/video/video.service';
import { UserService } from './../../services/user/user.service';
import { HelperService } from './../../services/helper/helper.service';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [VideoComponent],
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
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
