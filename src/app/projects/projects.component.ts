import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  constructor(private restService: RestService) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" }
  ];

  projects: any = [];

  loadData = async () => {
    this.projects = await this.restService.getData("project");
  };

  ngOnInit(): void {
    this.loadData();
  }
}
