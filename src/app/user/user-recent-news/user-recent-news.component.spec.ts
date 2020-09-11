import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentNewsComponent } from './user-recent-news.component';

describe('UserRecentNewsComponent', () => {
  let component: UserRecentNewsComponent;
  let fixture: ComponentFixture<UserRecentNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
