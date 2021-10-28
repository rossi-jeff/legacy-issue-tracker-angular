import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockFormComponent } from './timeclock-form.component';

describe('TimeclockFormComponent', () => {
  let component: TimeclockFormComponent;
  let fixture: ComponentFixture<TimeclockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
