import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIssueComponent } from './dashboard-issue.component';

describe('DashboardIssueComponent', () => {
  let component: DashboardIssueComponent;
  let fixture: ComponentFixture<DashboardIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
