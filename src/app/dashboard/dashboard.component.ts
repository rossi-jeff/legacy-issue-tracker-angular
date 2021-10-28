import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { Session } from "../utils";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private restService: RestService) {}

  session: any = new Session();

  issues: any = [];

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/dashboard", text: "Dashboard" }
  ];

  loadIssues = async (filter: any = {}) => {
    this.issues = await this.restService.getData("issue", filter);
  };

  ngOnInit(): void {
    this.loadIssues();
  }
}
