import { Component, OnInit } from "@angular/core";
import { Session, buildHeaders } from "../utils";
import { RestService } from "../rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-new",
  templateUrl: "./project-new.component.html",
  styleUrls: ["./project-new.component.scss"]
})
export class ProjectNewComponent implements OnInit {
  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/projects/new", text: "New" }
  ];

  session: any = new Session();
  signedIn: boolean = this.session.signedIn();

  project: any = {
    Name: "",
    Details: ""
  };

  saveProject = async () => {
    let form = document.forms[0];
    if (form.checkValidity()) {
      try {
        await this.restService.postData(
          "project",
          this.project,
          buildHeaders(this.session.data())
        );
        this.router.navigate(["/projects"]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {}
}
