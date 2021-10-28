import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbAccordionModule,
  NbButtonGroupModule,
  NbToggleModule,
  NbTabsetModule,
  NbDialogModule,
  NbAlertModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { IssuesComponent } from "./issues/issues.component";
import { UsersComponent } from "./users/users.component";
import { TimeclocksComponent } from "./timeclocks/timeclocks.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IssueCardComponent } from "./issue-card/issue-card.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { PanelComponent } from "./panel/panel.component";
import { ProjectNewComponent } from "./project-new/project-new.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectFilterComponent } from "./project-filter/project-filter.component";
import { IssueFilterComponent } from "./issue-filter/issue-filter.component";
import { IssueNewComponent } from "./issue-new/issue-new.component";
import { IssueDetailComponent } from "./issue-detail/issue-detail.component";
import { UserFilterComponent } from "./user-filter/user-filter.component";
import { UserNewComponent } from "./user-new/user-new.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { TimeclockFilterComponent } from "./timeclock-filter/timeclock-filter.component";
import { TimeclockNewComponent } from "./timeclock-new/timeclock-new.component";
import { TimeclockDetailComponent } from "./timeclock-detail/timeclock-detail.component";
import { TimeclockCardComponent } from "./timeclock-card/timeclock-card.component";
import { ProjectFormComponent } from "./project-form/project-form.component";
import { FormsModule } from "@angular/forms";
import { IssueFormComponent } from "./issue-form/issue-form.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { EmailListComponent } from "./email-list/email-list.component";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { TimeclockFormComponent } from "./timeclock-form/timeclock-form.component";
import { BreadCrumbTrailComponent } from "./bread-crumb-trail/bread-crumb-trail.component";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { PaginationComponent } from './pagination/pagination.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFilterComponent } from './dashboard-filter/dashboard-filter.component';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { DashboardColumnComponent } from './dashboard-column/dashboard-column.component';
import { DashboardIssueComponent } from './dashboard-issue/dashboard-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    IssuesComponent,
    UsersComponent,
    TimeclocksComponent,
    ProjectCardComponent,
    HeaderComponent,
    FooterComponent,
    IssueCardComponent,
    UserCardComponent,
    PanelComponent,
    ProjectNewComponent,
    ProjectDetailComponent,
    ProjectFilterComponent,
    IssueFilterComponent,
    IssueNewComponent,
    IssueDetailComponent,
    UserFilterComponent,
    UserNewComponent,
    UserDetailComponent,
    TimeclockFilterComponent,
    TimeclockNewComponent,
    TimeclockDetailComponent,
    TimeclockCardComponent,
    ProjectFormComponent,
    IssueFormComponent,
    UserFormComponent,
    EmailListComponent,
    PhoneListComponent,
    TimeclockFormComponent,
    BreadCrumbTrailComponent,
    LoginDialogComponent,
    ConfirmDialogComponent,
    PaginationComponent,
    DashboardComponent,
    DashboardFilterComponent,
    DashboardGridComponent,
    DashboardColumnComponent,
    DashboardIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "corporate" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbIconModule,
    NbInputModule,
    HttpClientModule,
    FormsModule,
    NbSelectModule,
    NbAccordionModule,
    NbButtonGroupModule,
    NbToggleModule,
    NbTabsetModule,
    NbDialogModule.forRoot(),
    NbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
