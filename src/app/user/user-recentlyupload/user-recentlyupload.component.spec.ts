import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentlyuploadComponent } from './user-recentlyupload.component';

describe('UserRecentlyuploadComponent', () => {
  let component: UserRecentlyuploadComponent;
  let fixture: ComponentFixture<UserRecentlyuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentlyuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentlyuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
