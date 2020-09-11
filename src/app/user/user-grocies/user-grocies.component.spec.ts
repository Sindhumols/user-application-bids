import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGrociesComponent } from './user-grocies.component';

describe('UserGrociesComponent', () => {
  let component: UserGrociesComponent;
  let fixture: ComponentFixture<UserGrociesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGrociesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGrociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
