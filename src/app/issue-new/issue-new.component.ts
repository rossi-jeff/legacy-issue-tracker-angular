import { Component, OnInit } from "@angular/core";
import { Session, buildHeaders } from "../utils";
import { RestService } from "../rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-issue-new",
  templateUrl: "./issue-new.component.html",
  styleUrls: ["./issue-new.component.scss"]
})
export class IssueNewComponent implements OnInit {
  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/issues", text: "Issues" },
    { href: "/issues/new", text: "New" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  issue: any = {};

  saveIssue = async () => {
    let form = document.forms[0];
    if (form.checkValidity()) {
      try {
        await this.restService.postData(
          "issue",
          this.issue,
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/issues"]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {}
}
