import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformTableComponent } from './conform-table.component';

describe('ConformTableComponent', () => {
  let component: ConformTableComponent;
  let fixture: ComponentFixture<ConformTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
