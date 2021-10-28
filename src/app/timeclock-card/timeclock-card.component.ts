import { Component, OnInit, Input } from "@angular/core";
import { FormatName } from "../utils";

@Component({
  selector: "app-timeclock-card",
  templateUrl: "./timeclock-card.component.html",
  styleUrls: ["./timeclock-card.component.scss"]
})
export class TimeclockCardComponent implements OnInit {
  @Input()
  timeclock: any;
  fullName: string = "";

  constructor() {}

  ngOnInit(): void {
    if (this.timeclock.User) {
      this.fullName = FormatName(this.timeclock.User.Name);
    }
  }
}
