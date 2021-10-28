import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-panel",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  items: NbMenuItem[] = [
    { title: "Home", link: "/", icon: "home" },
    { title: "Dashboard", link: "/dashboard", icon: "grid-outline" },
    { title: "Projects", link: "/projects", icon: "folder-outline" },
    { title: "Issues", link: "/issues", icon: "list-outline" },
    { title: "Users", link: "/users", icon: "person-outline" },
    { title: "Time Clocks", link: "/timeclocks", icon: "clock-outline" }
  ];

  @Input()
  togglePanelCB!: () => void;

  constructor() {}

  ngOnInit(): void {}
}
