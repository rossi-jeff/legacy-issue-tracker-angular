import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclocksComponent } from './timeclocks.component';

describe('TimeclocksComponent', () => {
  let component: TimeclocksComponent;
  let fixture: ComponentFixture<TimeclocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
