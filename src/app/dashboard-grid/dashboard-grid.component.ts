import { Component, OnInit, Input } from "@angular/core";
import { clone, buildHeaders } from "../utils";
import { RestService } from "../rest.service";
import { Session } from "../utils";

@Component({
  selector: "app-dashboard-grid",
  templateUrl: "./dashboard-grid.component.html",
  styleUrls: ["./dashboard-grid.component.scss"]
})
export class DashboardGridComponent implements OnInit {
  constructor(private restService: RestService) {}

  session: any = new Session();

  @Input()
  issues: any = [];

  @Input()
  enabled: boolean = false;

  blank: any = {
    New: [],
    Assigned: [],
    Accepted: [],
    Fixed: [],
    Other: []
  };

  sorted: any = {};

  sortIssues = () => {
    this.sorted = clone(this.blank);
    for (let issue of this.issues) {
      switch (issue.Status) {
        case "New":
          this.sorted.New.push(issue);
          break;
        case "Assigned":
          this.sorted.Assigned.push(issue);
          break;
        case "Accepted":
          this.sorted.Accepted.push(issue);
          break;
        case "Fixed":
          this.sorted.Fixed.push(issue);
          break;
        default:
          this.sorted.Other.push(issue);
          break;
      }
    }
  };

  issueMoved = async (ev: any) => {
    if (!this.enabled) return;
    const { UUID, status } = ev;
    let found: any, idx: number;
    for (let key in this.sorted) {
      idx = this.sorted[key].findIndex((i: any) => i.UUID === UUID);
      if (idx !== -1) {
        found = this.sorted[key][idx];
        this.sorted[key].splice(idx, 1);
        break;
      }
    }
    if (found) {
      found.Status = status;
      try {
        const response = await this.restService.patchData(
          `issue/${UUID}`,
          found,
          buildHeaders(this.session.data())
        );
        this.sorted[status].unshift(response);
        this.sorted = clone(this.sorted);
      } catch (error) {
        console.log(error);
      }
    }
  };

  ngOnChanges() {
    this.sortIssues();
  }

  ngOnInit(): void {
    this.sorted = clone(this.blank);
  }
}
