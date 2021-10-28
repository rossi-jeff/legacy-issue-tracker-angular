import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { IssuesComponent } from "./issues/issues.component";
import { UsersComponent } from "./users/users.component";
import { TimeclocksComponent } from "./timeclocks/timeclocks.component";
import { ProjectNewComponent } from "./project-new/project-new.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { IssueNewComponent } from "./issue-new/issue-new.component";
import { IssueDetailComponent } from "./issue-detail/issue-detail.component";
import { UserNewComponent } from "./user-new/user-new.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { TimeclockNewComponent } from "./timeclock-new/timeclock-new.component";
import { TimeclockDetailComponent } from "./timeclock-detail/timeclock-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "issues", component: IssuesComponent },
  { path: "users", component: UsersComponent },
  { path: "timeclocks", component: TimeclocksComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "projects/new", component: ProjectNewComponent },
  { path: "projects/:uuid", component: ProjectDetailComponent },
  { path: "issues/new", component: IssueNewComponent },
  { path: "issues/:uuid", component: IssueDetailComponent },
  { path: "users/new", component: UserNewComponent },
  { path: "users/:uuid", component: UserDetailComponent },
  { path: "timeclocks/new", component: TimeclockNewComponent },
  { path: "timeclocks/:uuid", component: TimeclockDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
