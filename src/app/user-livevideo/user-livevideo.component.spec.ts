import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLivevideoComponent } from './user-livevideo.component';

describe('UserLivevideoComponent', () => {
  let component: UserLivevideoComponent;
  let fixture: ComponentFixture<UserLivevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLivevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLivevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
