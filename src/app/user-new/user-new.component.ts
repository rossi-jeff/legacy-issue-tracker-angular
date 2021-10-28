import { Component, OnInit } from "@angular/core";
import * as uuid from "uuid";
import { Session, buildHeaders } from "../utils";
import { RestService } from "../rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-new",
  templateUrl: "./user-new.component.html",
  styleUrls: ["./user-new.component.scss"]
})
export class UserNewComponent implements OnInit {
  constructor(private restService: RestService, private router: Router) {}

  session: any = new Session();

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/users", text: "Users" },
    { href: "/users/new", text: "New" }
  ];

  user: any = {
    Credentials: {},
    Name: {},
    Roles: [],
    Emails: [],
    Phones: []
  };

  addPhone = (phone: any): void => {
    phone.UUID = uuid.v4();
    this.user.Phones.push(phone);
  };

  remPhone = (UUID: string): void => {
    let idx = this.user.Phones.findIndex((p: any) => p.UUID === UUID);
    if (idx !== -1) {
      this.user.Phones.splice(idx, 1);
    }
  };

  addEmail = (email: any): void => {
    if (email.UUID) {
      const { UUID } = email;
      let idx = this.user.Emails.findIndex((e: any) => e.UUID === UUID);
      if (idx !== -1) {
        this.user.Emails[idx] = email;
      }
    } else {
      email.UUID = uuid.v4();
      this.user.Emails.push(email);
    }
  };

  remEmail = (UUID: string): void => {
    let idx = this.user.Emails.findIndex((e: any) => e.UUID === UUID);
    if (idx !== -1) {
      this.user.Emails.splice(idx, 1);
    }
  };

  saveUser = async () => {
    let form0 = document.forms[0];
    let form1 = document.forms[1];
    if (form0.checkValidity() && form1.checkValidity()) {
      try {
        await this.restService.postData(
          "register",
          this.user,
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/users"]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  ngOnInit(): void {}
}
