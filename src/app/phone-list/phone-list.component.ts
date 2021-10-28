import { Component, OnInit, Input } from "@angular/core";
import { UsageArray, PhoneTypeArray } from "../utils";

@Component({
  selector: "app-phone-list",
  templateUrl: "./phone-list.component.html",
  styleUrls: ["./phone-list.component.scss"]
})
export class PhoneListComponent implements OnInit {
  @Input()
  phones: any[] = [];

  @Input()
  addPhone!: (phone: any) => void;

  @Input()
  remPhone!: (UUID: string) => void;

  phone: any = { Public: false };

  usageArray: string[] = UsageArray;

  phoneTypeArray: string[] = PhoneTypeArray;

  editPhone = (UUID: string) => {
    this.phone = this.phones.find((p: any) => p.UUID === UUID);
  };

  savePhone = () => {
    this.addPhone(this.phone);
    this.phone = { Public: false };
  };

  constructor() {}

  ngOnInit(): void {}
}
