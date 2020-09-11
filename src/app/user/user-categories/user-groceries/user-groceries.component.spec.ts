import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroceriesComponent } from './user-groceries.component';

describe('UserGroceriesComponent', () => {
  let component: UserGroceriesComponent;
  let fixture: ComponentFixture<UserGroceriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroceriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
