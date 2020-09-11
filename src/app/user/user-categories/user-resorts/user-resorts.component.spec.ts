import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResortsComponent } from './user-resorts.component';

describe('UserResortsComponent', () => {
  let component: UserResortsComponent;
  let fixture: ComponentFixture<UserResortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
