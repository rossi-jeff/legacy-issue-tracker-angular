import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-project-card",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"]
})
export class ProjectCardComponent implements OnInit {
  @Input()
  project: any;

  constructor() {}

  ngOnInit(): void {}
}
