import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableHomeComponent } from './book-table-home.component';

describe('BookTableHomeComponent', () => {
  let component: BookTableHomeComponent;
  let fixture: ComponentFixture<BookTableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
