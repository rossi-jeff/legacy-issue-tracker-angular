import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private restService: RestService) {}

  crumbs: any[] = [{ href: "/", text: "Home" }];

  resources: any = [];
  activeTab: number = 0;

  loadData = async () => {
    this.resources = await this.restService.getData("resource");
    if (this.resources.length) {
      this.activeTab = this.resources[0].Id;
    }
  };

  ngOnInit(): void {
    this.loadData();
  }
}
