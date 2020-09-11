import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooktableComponent } from './user-booktable.component';

describe('UserBooktableComponent', () => {
  let component: UserBooktableComponent;
  let fixture: ComponentFixture<UserBooktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBooktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
