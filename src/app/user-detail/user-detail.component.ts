import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute } from "@angular/router";
import { FormatName, buildHeaders, Session } from "../utils";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/users", text: "Users" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  UUID!: string;

  user: any = {
    Credentials: {},
    Name: {},
    Roles: [],
    Emails: [],
    Phones: []
  };

  addPhone = (phone: any): void => {};

  remPhone = (UUID: string): void => {};

  addEmail = (email: any): void => {};

  remEmail = (UUID: string): void => {};

  loadData = async (UUID: string) => {
    this.user = await this.restService.getData(`user/${UUID}`);
    if (this.crumbs.length === 2 && this.user) {
      this.crumbs.push({
        href: `/users/${UUID}`,
        text: FormatName(this.user.Name)
      });
    }
  };

  updateUser = async () => {
    let form0 = document.forms[0];
    let form1 = document.forms[1];
    if (form0.checkValidity() && form1.checkValidity()) {
      try {
        await this.restService.patchData(
          `user/${this.UUID}`,
          this.user,
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/users"]);
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
