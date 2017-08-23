import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoComponent } from './video.component';

describe('PageVideoComponent', () => {
  let component: PageVideoComponent;
  let fixture: ComponentFixture<PageVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVideoComponent ]
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
