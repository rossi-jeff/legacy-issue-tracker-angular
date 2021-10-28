import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.scss"]
})
export class IssuesComponent implements OnInit {
  constructor(private restService: RestService) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/issues", text: "Issues" }
  ];

  issues: any = [];
  paged: any = [];

  pages: number[] = [];
  currentPage: number = 1;
  perPage: number = 10;

  setPage = (page: number) => {
    this.currentPage = page;
    let first = (this.currentPage - 1) * this.perPage;
    let last = first + this.perPage;
    if (last > this.issues.length) last = this.issues.length;
    this.paged = this.issues.slice(first, last);
  };

  buildPages = () => {
    const maxPages = Math.ceil(this.issues.length / this.perPage);
    let page = 1;
    this.pages = [];
    while (page <= maxPages) {
      this.pages.push(page);
      page++;
    }
    this.setPage(1);
  };

  loadIssues = async (filter: any = {}) => {
    this.issues = await this.restService.getData("issue", filter);
    this.buildPages();
  };

  ngOnInit(): void {
    this.loadIssues();
  }
}
