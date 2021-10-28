import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockCardComponent } from './timeclock-card.component';

describe('TimeclockCardComponent', () => {
  let component: TimeclockCardComponent;
  let fixture: ComponentFixture<TimeclockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
