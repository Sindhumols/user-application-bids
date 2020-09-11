import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOpticalComponent } from './user-optical.component';

describe('UserOpticalComponent', () => {
  let component: UserOpticalComponent;
  let fixture: ComponentFixture<UserOpticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOpticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOpticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
