import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-form",
  templateUrl: "./project-form.component.html",
  styleUrls: ["./project-form.component.scss"]
})
export class ProjectFormComponent implements OnInit {
  @Input()
  project: any;

  constructor() {}

  ngOnInit(): void {}
}
