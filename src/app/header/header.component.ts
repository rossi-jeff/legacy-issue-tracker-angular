import { Component, OnInit, Input } from "@angular/core";
import { Session, buildHeaders } from "../utils";
import { NbDialogService } from "@nebular/theme";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { RestService } from "../rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input()
  togglePanelCB!: () => void;

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();
  dialogRef: any;

  openLogin = () => {
    this.dialogRef = this.dialogService
      .open(LoginDialogComponent, {
        closeOnBackdropClick: false
      })
      .onClose.subscribe(payload => payload && this.login(payload));
  };

  login = async (payload: any) => {
    const { Username, Password } = payload;
    if (Username && Password) {
      try {
        let response: any = await this.restService.postData(
          "auth/login",
          payload,
          buildHeaders(this.session.data())
        );
        if (response.Token) {
          response.signedIn = true;
          this.session.login(response);
          this.signedIn = this.session.signedIn();
          // reload page, which will toggle from signed out/in
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = "reload";
          this.router.navigate([currentUrl]);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("no data");
      this.openLogin();
    }
  };

  openLogout = () => {
    this.dialogRef = this.dialogService
      .open(ConfirmDialogComponent, {
        context: {
          title: "Sign Out",
          message: "Are you sure you want to sign out?"
        },
        closeOnBackdropClick: false
      })
      .onClose.subscribe(ok => ok && this.logout());
  };

  logout = async () => {
    if (this.session.id()) {
      try {
        let response: any = await this.restService.deleteData(
          `auth/${this.session.id()}`,
          buildHeaders(this.session.data())
        );
        this.session.logout();
        this.signedIn = this.session.signedIn();
      } catch (error) {
        console.log(error);
      }
    } else {
      this.session.logout();
      this.signedIn = this.session.signedIn();
    }
    // go home after logout if not there
    if (this.router.url !== "/") {
      this.router.navigate(["/"]);
    }
  };

  constructor(
    private dialogService: NbDialogService,
    private restService: RestService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
