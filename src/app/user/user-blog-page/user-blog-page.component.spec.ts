import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogPageComponent } from './user-blog-page.component';

describe('UserBlogPageComponent', () => {
  let component: UserBlogPageComponent;
  let fixture: ComponentFixture<UserBlogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBlogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
