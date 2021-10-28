import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  constructor(private restService: RestService) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/users", text: "Users" }
  ];

  users: any = [];

  loadData = async () => {
    this.users = await this.restService.getData("user");
  };

  ngOnInit(): void {
    this.loadData();
  }
}
