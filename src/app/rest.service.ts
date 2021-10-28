import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RestService {
  private readonly baseURL = "https://issue-tracker-api-jrossi.herokuapp.com/";

  constructor(private http: HttpClient) {}

  buildQueryString(obj: any) {
    return Object.keys(obj)
      .map(k => escape(k) + "=" + escape(obj[k]))
      .join("&");
  }

  async getData(path: string, params: any = {}) {
    if (Object.keys(params).length) {
      path += "?" + this.buildQueryString(params);
    }
    return await this.http.get(this.baseURL + path).toPromise();
  }

  async postData(path: string, payload: any, headers: any) {
    return await this.http
      .post(this.baseURL + path, payload, { headers })
      .toPromise();
  }

  async patchData(path: string, payload: any, headers: any) {
    return await this.http
      .patch(this.baseURL + path, payload, { headers })
      .toPromise();
  }

  async deleteData(path: string, headers: any) {
    return await this.http.delete(this.baseURL + path, { headers }).toPromise();
  }
}
