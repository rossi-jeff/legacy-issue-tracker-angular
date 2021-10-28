import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import { FormatName, issueSort, projectSort, userSort } from "../utils";

@Component({
  selector: "app-timeclock-form",
  templateUrl: "./timeclock-form.component.html",
  styleUrls: ["./timeclock-form.component.scss"]
})
export class TimeclockFormComponent implements OnInit {
  @Input()
  timeclock: any = {
    Start: {},
    End: {}
  };

  opts: any = {
    users: [],
    projects: [],
    issues: []
  };

  projects: any = [];
  issues: any = [];
  users: any = [];

  buildOptions = () => {
    this.opts = {
      users: [{ value: 0, text: "" }],
      projects: [{ value: 0, text: "" }],
      issues: [{ value: 0, text: "" }]
    };
    for (let project of this.projects) {
      this.opts.projects.push({
        value: project.Id,
        text: project.Name
      });
    }
    for (let user of this.users) {
      this.opts.users.push({
        value: user.Id,
        text: FormatName(user.Name)
      });
    }
    for (let issue of this.issues) {
      this.opts.issues.push({
        value: issue.Id,
        text: `${issue.SequenceNumber} | ${issue.Title}`
      });
    }
  };

  constructor(private restService: RestService) {}

  loadData = async () => {
    this.users = await this.restService.getData("user");
    this.users.sort(userSort);
    this.projects = await this.restService.getData("project");
    this.projects.sort(projectSort);
    this.issues = await this.restService.getData("issue");
    this.issues.sort(issueSort);
    this.buildOptions();
  };

  ngOnInit(): void {
    this.loadData();
  }
}
