import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProdsServices } from "../../../Shared/services/Routing/prods.services";
import { Iprods } from "src/app/Shared/model/Routing(Tejas)/prods";
import { Router } from "@angular/router";

@Component({
  selector: "app-prod",
  templateUrl: "./prod.component.html",
  styleUrls: ["./prod.component.css"]
})
export class ProdComponent implements OnInit {
  public prodsData: Iprods[];
  constructor(
    private AR: ActivatedRoute,
    private PS: ProdsServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.AR.params.subscribe(item => {
      this.PS.getProds().subscribe(data => {
        this.prodsData = data;
        this.prodsData.find(d => {
          if (d.productId.toString() == item["productId"].toString()) {
            alert(JSON.stringify(d));
            this.prodsData.length = 0;
            this.prodsData.push(d);
            return true;
          } else {
            return false;
          }
        });
      });
    });
  }

  backbutton() {
    this.router.navigateByUrl("/productList");
  }
}
