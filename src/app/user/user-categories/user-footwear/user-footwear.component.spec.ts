import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFootwearComponent } from './user-footwear.component';

describe('UserFootwearComponent', () => {
  let component: UserFootwearComponent;
  let fixture: ComponentFixture<UserFootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
