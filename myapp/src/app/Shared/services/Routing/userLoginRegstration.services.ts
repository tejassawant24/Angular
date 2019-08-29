import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Iregistration } from "../../model/Routing(Tejas)/userRegistration";
import { ILogin } from "../../model/Routing(Tejas)/login";

@Injectable({ providedIn: "root" })
export class PostUserLoginRegistartionServices {
  public headers;
  private postUserRegistratonUrl: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";

  private postUserLoginUrl: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  PostUserRegistration(data): Observable<Iregistration> {
    return this.http.post<Iregistration>(
      this.postUserRegistratonUrl,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }

  PostUserLogin(data: ILogin) {
    return this.http.post(this.postUserLoginUrl, JSON.stringify(data), {
      headers: this.headers
    });
  }
}
