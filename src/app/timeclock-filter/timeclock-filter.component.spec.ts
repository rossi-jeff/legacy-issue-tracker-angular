import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockFilterComponent } from './timeclock-filter.component';

describe('TimeclockFilterComponent', () => {
  let component: TimeclockFilterComponent;
  let fixture: ComponentFixture<TimeclockFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
