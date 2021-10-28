import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { clone } from "../utils";

@Component({
  selector: "app-dashboard-column",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard-column.component.html",
  styleUrls: ["./dashboard-column.component.scss"]
})
export class DashboardColumnComponent implements OnInit {
  constructor() {}

  @Input()
  issues: any = [];

  @Input()
  status: string = "";

  @Input()
  issueMoved!: (ev: any) => void;

  @Input()
  enabled: boolean = false;

  @Input()
  droppable: boolean = false;

  id: string = "";

  issueLoaded = (UUID: string) => {
    if (!this.enabled) return;
    const el = document.getElementById(UUID);
    if (el) {
      el.draggable = true;
      el.style.cursor = "move";
      el.addEventListener("dragstart", this.handleDragStart);
      el.addEventListener("dragend", this.handleDragEnd);
    }
  };

  handleDragStart = (ev: any) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.dropEffect = "copy";
    ev.target.style.opacity = "0.4";
  };

  handleDragEnd = (ev: any) => {
    ev.preventDefault();
    ev.target.style.opacity = 1;
  };

  handleDragOver = (ev: any) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  };

  handleDragEnter = (ev: any) => {
    ev.preventDefault();
    let target = document.getElementById(this.id);
    if (target && ev.target && ev.target.id === target.id) {
      target.classList.add("over");
      setTimeout(() => {
        let target = document.getElementById(this.id);
        if (target) target.classList.remove("over");
      }, 1500);
    }
  };

  handleDragExit = (ev: any) => {
    ev.preventDefault();
    let target = document.getElementById(this.id);
    if (target && ev.target && ev.target.id === target.id) {
      target.classList.remove("over");
    }
  };

  handleDrop = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    let target = document.getElementById(this.id);
    if (target) {
      target.classList.remove("over");
    }
    const { status } = this;
    const UUID = ev.dataTransfer.getData("text/plain");
    if (UUID) {
      this.issueMoved({ UUID, status });
    }
  };

  enableDrop = () => {
    if (!this.droppable) return;
    let target = document.getElementById(this.id);
    if (target) {
      target.setAttribute("droppable", "true");
      target.addEventListener("drop", this.handleDrop);
      target.addEventListener("dragover", this.handleDragOver);
      target.addEventListener("dragenter", this.handleDragEnter);
      target.addEventListener("dragleave", this.handleDragExit);
    }
  };

  ngOnChanges() {
    this.issues = clone(this.issues);
  }

  ngAfterViewInit() {
    this.enableDrop();
  }

  ngOnInit(): void {
    this.id = `column-${this.status}`;
  }
}
