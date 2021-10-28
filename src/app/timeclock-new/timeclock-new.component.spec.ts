import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockNewComponent } from './timeclock-new.component';

describe('TimeclockNewComponent', () => {
  let component: TimeclockNewComponent;
  let fixture: ComponentFixture<TimeclockNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
