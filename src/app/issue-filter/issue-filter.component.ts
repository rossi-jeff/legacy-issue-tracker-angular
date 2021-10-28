import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import {
  ComplexityArray,
  IssueTypeArray,
  PriorityArray,
  StatusArray,
  FormatName,
  projectSort,
  userSort,
  RemoveBlanks
} from "../utils";

@Component({
  selector: "app-issue-filter",
  templateUrl: "./issue-filter.component.html",
  styleUrls: ["./issue-filter.component.scss"]
})
export class IssueFilterComponent implements OnInit {
  @Input()
  loadIssues!: (filter: any) => void;

  constructor(private restService: RestService) {}

  projects: any = [];
  users: any = [];
  projectOptions: any[] = [];
  userOptions: any[] = [];
  opts: any = {
    ComplexityArray,
    IssueTypeArray,
    PriorityArray,
    StatusArray
  };
  showFilter: boolean = false;
  filter: any = {};
  timer: any = null;

  buildOptions = () => {
    this.projectOptions = [{ value: 0, text: "" }];
    this.userOptions = [{ value: 0, text: "" }];
    for (let project of this.projects) {
      this.projectOptions.push({
        value: project.Id,
        text: project.Name
      });
    }
    for (let user of this.users) {
      this.userOptions.push({
        value: user.Id,
        text: FormatName(user.Name)
      });
    }
  };

  clearFilters = () => {
    this.filter = {};
    this.filterIssues();
  };

  filterIssues = () => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.loadIssues(RemoveBlanks(this.filter));
    }, 100);
  };

  loadData = async () => {
    this.users = await this.restService.getData("user");
    this.users.sort(userSort);
    this.projects = await this.restService.getData("project");
    this.projects.sort(projectSort);
    this.buildOptions();
  };

  ngOnInit(): void {
    this.loadData();
  }
}
