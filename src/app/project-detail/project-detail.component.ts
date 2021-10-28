import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Session, buildHeaders } from "../utils";
import { RestService } from "../rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"]
})
export class ProjectDetailComponent implements OnInit {
  UUID!: string;
  project: any = {
    Name: "",
    Details: ""
  };

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  loadData = async (UUID: string) => {
    this.project = await this.restService.getData(`project/${UUID}`);
    if (this.crumbs.length === 2 && this.project) {
      this.crumbs.push({
        href: `/projects/${UUID}`,
        text: this.project.Name
      });
    }
  };

  updateProject = async () => {
    let form = document.forms[0];
    if (form.checkValidity()) {
      try {
        await this.restService.patchData(
          `project/${this.UUID}`,
          this.project,
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/projects"]);
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
