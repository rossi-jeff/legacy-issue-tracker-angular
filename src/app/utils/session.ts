import { clone } from "./clone";

export class Session {
  readonly key: string = "issue-tracker-angular-session";
  readonly loggedOut: any = {
    signedIn: false,
    Name: "",
    UserName: "",
    Token: "",
    UUID: "",
    SessionId: ""
  };
  private _data: any;

  constructor() {
    this.load();
  }

  data() {
    return this._data;
  }

  id() {
    return this._data.SessionId;
  }

  signedIn() {
    return this._data.signedIn;
  }

  load() {
    let loaded = localStorage.getItem(this.key);
    if (loaded) {
      this._data = JSON.parse(loaded);
    } else {
      this._data = clone(this.loggedOut);
    }
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this._data));
  }

  login(args: any) {
    const { signedIn, Name, UserName, Token, UUID, SessionId } = args;
    this._data = { signedIn, Name, UserName, Token, UUID, SessionId };
    this.save();
  }

  logout() {
    this._data = clone(this.loggedOut);
    localStorage.removeItem(this.key);
  }
}
