import { Component, OnInit, Input } from "@angular/core";
import { UsageArray } from "../utils";

@Component({
  selector: "app-email-list",
  templateUrl: "./email-list.component.html",
  styleUrls: ["./email-list.component.scss"]
})
export class EmailListComponent implements OnInit {
  @Input()
  emails: any[] = [];

  @Input()
  addEmail!: (email: any) => void;

  @Input()
  remEmail!: (UUID: string) => void;

  email: any = { Public: false };

  usageArray: string[] = UsageArray;

  saveEmail = () => {
    this.addEmail(this.email);
    this.email = { Public: false };
  };

  editEmail = (UUID: string) => {
    this.email = this.emails.find((e: any) => e.UUID === UUID);
  };

  constructor() {}

  ngOnInit(): void {}
}
