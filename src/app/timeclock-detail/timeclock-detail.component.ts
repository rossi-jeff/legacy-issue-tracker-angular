import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute } from "@angular/router";
import { Session, buildHeaders, RemoveBlanks } from "../utils";
import { Router } from "@angular/router";

@Component({
  selector: "app-timeclock-detail",
  templateUrl: "./timeclock-detail.component.html",
  styleUrls: ["./timeclock-detail.component.scss"]
})
export class TimeclockDetailComponent implements OnInit {
  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/timeclocks", text: "Time Clocks" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  UUID!: string;

  timeclock: any = {
    Start: {},
    End: {}
  };

  loadData = async (UUID: string) => {
    this.timeclock = await this.restService.getData(`timeclock/${UUID}`);
    if (this.crumbs.length === 2 && this.timeclock) {
      this.crumbs.push({
        href: `/timeclocks/${UUID}`,
        text: "Details"
      });
    }
  };

  updateTimeClock = async () => {
    let form = document.forms[0];
    if (form.checkValidity()) {
      try {
        await this.restService.patchData(
          `timeclock/${this.UUID}`,
          RemoveBlanks(this.timeclock),
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/timeclocks"]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let uuid = params.get("uuid");
      this.UUID = uuid || "";
    });
    if (this.UUID) {
      this.loadData(this.UUID);
    }
  }
}
