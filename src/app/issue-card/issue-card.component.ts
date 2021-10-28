import { Component, OnInit, Input } from "@angular/core";
import { FormatName } from "../utils";

@Component({
  selector: "app-issue-card",
  templateUrl: "./issue-card.component.html",
  styleUrls: ["./issue-card.component.scss"]
})
export class IssueCardComponent implements OnInit {
  @Input()
  issue: any;
  author: string = "";
  assigned: string = "";

  constructor() {}

  ngOnInit(): void {
    if (this.issue.Author) {
      this.author = FormatName(this.issue.Author.Name);
    }
    if (this.issue.AssignedTo) {
      this.assigned = FormatName(this.issue.AssignedTo.Name);
    }
  }
}
