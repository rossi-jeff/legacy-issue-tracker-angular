import { Component, OnInit } from "@angular/core";
import { Session, buildHeaders, RemoveBlanks } from "../utils";
import { RestService } from "../rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-timeclock-new",
  templateUrl: "./timeclock-new.component.html",
  styleUrls: ["./timeclock-new.component.scss"]
})
export class TimeclockNewComponent implements OnInit {
  constructor(private restService: RestService, private router: Router) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/timeclocks", text: "Time Clocks" },
    { href: "/timeclocks/new", text: "New" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  timeclock: any = {
    Start: {},
    End: {}
  };

  saveTimeClock = async () => {
    let form = document.forms[0];
    if (form.checkValidity()) {
      try {
        await this.restService.postData(
          "timeclock",
          RemoveBlanks(this.timeclock),
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/timeclocks"]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  ngOnInit(): void {}
}
