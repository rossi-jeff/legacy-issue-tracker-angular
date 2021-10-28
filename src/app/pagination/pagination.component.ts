import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input()
  pages: number[] = [];

  @Input()
  currentPage: number = 1;

  @Input()
  setPage!: (page: number) => void;

  constructor() {}

  ngOnInit(): void {}
}
