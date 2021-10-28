import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockDetailComponent } from './timeclock-detail.component';

describe('TimeclockDetailComponent', () => {
  let component: TimeclockDetailComponent;
  let fixture: ComponentFixture<TimeclockDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
