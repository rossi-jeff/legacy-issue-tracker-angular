import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormatName } from "../utils";

@Component({
  selector: "app-dashboard-issue",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard-issue.component.html",
  styleUrls: ["./dashboard-issue.component.scss"]
})
export class DashboardIssueComponent implements OnInit {
  constructor() {}

  @Input()
  issue: any = {};

  @Input()
  issueLoaded!: (UUID: string) => void;

  visible: boolean = false;

  author: string = "";
  assigned: string = "";

  ngAfterViewInit() {
    if (this.issue && this.issue.UUID) {
      this.issueLoaded(this.issue.UUID);
    }
  }

  ngOnChanges() {
    if (this.issue && this.issue.UUID) {
      this.issueLoaded(this.issue.UUID);
    }
  }

  ngOnDestroy() {
    let el = document.getElementById(this.issue.UUID);
    if (el) {
      el.remove();
    }
  }

  ngOnInit(): void {
    if (this.issue.Author) {
      this.author = FormatName(this.issue.Author.Name);
    }
    if (this.issue.AssignedTo) {
      this.assigned = FormatName(this.issue.AssignedTo.Name);
    }
  }
}
