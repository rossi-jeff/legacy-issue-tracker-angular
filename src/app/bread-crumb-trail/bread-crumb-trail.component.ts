import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bread-crumb-trail",
  templateUrl: "./bread-crumb-trail.component.html",
  styleUrls: ["./bread-crumb-trail.component.scss"]
})
export class BreadCrumbTrailComponent implements OnInit {
  @Input()
  crumbs: any[] = [];

  icons: any = {
    Home: "home",
    Projects: "folder-outline",
    Issues: "list-outline",
    Users: "person-outline",
    "Time Clocks": "clock-outline",
    Dashboard: "grid-outline"
  };

  constructor() {}

  ngOnInit(): void {}
}
