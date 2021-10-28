import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-timeclocks",
  templateUrl: "./timeclocks.component.html",
  styleUrls: ["./timeclocks.component.scss"]
})
export class TimeclocksComponent implements OnInit {
  constructor(private restService: RestService) {}

  crumbs: any[] = [
    { href: "/", text: "Home" },
    { href: "/timeclocks", text: "Time Clocks" }
  ];

  timeclocks: any = [];
  paged: any = [];

  pages: number[] = [];
  currentPage: number = 1;
  perPage: number = 10;

  setPage = (page: number) => {
    this.currentPage = page;
    let first = (this.currentPage - 1) * this.perPage;
    let last = first + this.perPage;
    if (last > this.timeclocks.length) last = this.timeclocks.length;
    this.paged = this.timeclocks.slice(first, last);
  };

  buildPages = () => {
    const maxPages = Math.ceil(this.timeclocks.length / this.perPage);
    let page = 1;
    this.pages = [];
    while (page <= maxPages) {
      this.pages.push(page);
      page++;
    }
    this.setPage(1);
  };

  loadTimeClocks = async (filter: any = {}) => {
    this.timeclocks = await this.restService.getData("timeclock", filter);
    this.buildPages();
  };

  ngOnInit(): void {
    this.loadTimeClocks();
  }
}
