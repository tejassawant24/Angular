import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Iprods } from "../../model/Routing(Tejas)/prods";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ProdsServices {
  private prodsApiUrl = "../../../../assets/API/Routing/productapi.json";

  constructor(private http: HttpClient) {}

  getProds(): Observable<Iprods[]> {
    return this.http.get<Iprods[]>(this.prodsApiUrl);
  }
}
