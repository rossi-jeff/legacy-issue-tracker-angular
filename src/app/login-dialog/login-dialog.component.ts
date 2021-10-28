import { Component, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "app-login-dialog",
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"]
})
export class LoginDialogComponent implements OnInit {
  constructor(private dialogRef: NbDialogRef<LoginDialogComponent>) {}

  payload: any = {};

  close = () => {
    this.dialogRef.close();
  };

  signIn = () => {
    this.dialogRef.close(this.payload);
  };

  ngOnInit(): void {}
}
