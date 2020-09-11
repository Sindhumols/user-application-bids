import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGymComponent } from './user-gym.component';

describe('UserGymComponent', () => {
  let component: UserGymComponent;
  let fixture: ComponentFixture<UserGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
