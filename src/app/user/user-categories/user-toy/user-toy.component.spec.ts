import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToyComponent } from './user-toy.component';

describe('UserToyComponent', () => {
  let component: UserToyComponent;
  let fixture: ComponentFixture<UserToyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserToyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
