import { Component, OnInit, Input } from "@angular/core";
import { FormatName } from "../utils";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"]
})
export class UserCardComponent implements OnInit {
  @Input()
  user: any;
  fullName: string = "";

  constructor() {}

  ngOnInit(): void {
    this.fullName = FormatName(this.user.Name);
  }
}
