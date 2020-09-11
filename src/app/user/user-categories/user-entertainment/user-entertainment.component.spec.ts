import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntertainmentComponent } from './user-entertainment.component';

describe('UserEntertainmentComponent', () => {
  let component: UserEntertainmentComponent;
  let fixture: ComponentFixture<UserEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
