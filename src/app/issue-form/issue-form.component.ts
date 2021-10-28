import { Component, OnInit, Input } from "@angular/core";
import { RestService } from "../rest.service";
import {
  ComplexityArray,
  IssueTypeArray,
  PriorityArray,
  StatusArray,
  FormatName,
  projectSort,
  userSort
} from "../utils";

@Component({
  selector: "app-issue-form",
  templateUrl: "./issue-form.component.html",
  styleUrls: ["./issue-form.component.scss"]
})
export class IssueFormComponent implements OnInit {
  @Input()
  issue: any = {};
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

  constructor(private restService: RestService) {}

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
