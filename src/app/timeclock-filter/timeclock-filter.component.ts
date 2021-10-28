import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import {
  FormatName,
  issueSort,
  projectSort,
  userSort,
  RemoveBlanks
} from "../utils";

@Component({
  selector: "app-timeclock-filter",
  templateUrl: "./timeclock-filter.component.html",
  styleUrls: ["./timeclock-filter.component.scss"]
})
export class TimeclockFilterComponent implements OnInit {
  @Input()
  loadTimeClocks!: (filter: any) => void;

  constructor(private restService: RestService) {}

  opts: any = {
    users: [],
    projects: [],
    issues: []
  };

  projects: any = [];
  issues: any = [];
  users: any = [];

  showFilter: boolean = false;

  filter: any = {};
  timer: any = null;

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

  loadData = async () => {
    this.users = await this.restService.getData("user");
    this.users.sort(userSort);
    this.projects = await this.restService.getData("project");
    this.projects.sort(projectSort);
    this.issues = await this.restService.getData("issue");
    this.issues.sort(issueSort);
    this.buildOptions();
  };

  clearFilters = () => {
    this.filter = {};
    this.filterTimeClocks();
  };

  filterTimeClocks = () => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.loadTimeClocks(RemoveBlanks(this.filter));
    }, 100);
  };

  ngOnInit(): void {
    this.loadData();
  }
}
