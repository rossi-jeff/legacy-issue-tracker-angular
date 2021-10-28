import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Input
} from "@angular/core";
import { RoleArray } from "../utils";

@Component({
  selector: "app-user-form",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  @Input()
  user: any = {
    Credentials: {},
    Name: {},
    Roles: [],
    Emails: [],
    Phones: []
  };

  @Input()
  addPhone!: (phone: any) => void;

  @Input()
  remPhone!: (UUID: string) => void;

  @Input()
  addEmail!: (email: any) => void;

  @Input()
  remEmail!: (UUID: string) => void;

  @Input()
  showPass: boolean = false;

  roleArray: string[] = RoleArray;

  rolesChanged = (ev: any): void => {
    this.user.Roles = ev;
    this.cd.markForCheck();
  };

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
