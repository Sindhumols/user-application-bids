import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentBlogComponent } from './user-recent-blog.component';

describe('UserRecentBlogComponent', () => {
  let component: UserRecentBlogComponent;
  let fixture: ComponentFixture<UserRecentBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
