import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpansionComponent } from './user-expansion.component';

describe('UserExpansionComponent', () => {
  let component: UserExpansionComponent;
  let fixture: ComponentFixture<UserExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
