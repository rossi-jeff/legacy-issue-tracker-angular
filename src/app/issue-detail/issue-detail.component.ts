import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ActivatedRoute } from "@angular/router";
import { Session, buildHeaders } from "../utils";
import { Router } from "@angular/router";

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.component.html",
  styleUrls: ["./issue-detail.component.scss"]
})
export class IssueDetailComponent implements OnInit {
  UUID!: string;
  issue: any = {};

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/issues", text: "Issues" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  loadData = async (UUID: string) => {
    this.issue = await this.restService.getData(`issue/${this.UUID}`);
    if (this.crumbs.length === 2 && this.issue) {
      this.crumbs.push({
        href: `/issues/${UUID}`,
        text: this.issue.Title
      });
    }
  };

  updateIssue = async () => {
    let form = document.forms[0];
    if (form.checkValidity()) {
      try {
        await this.restService.patchData(
          `issue/${this.UUID}`,
          this.issue,
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/issues"]);
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
