import { Component, OnInit, ElementRef } from "@angular/core";
import { ProdsServices } from "../../../Shared/services/Routing/prods.services";
import { Iprods } from "src/app/Shared/model/Routing(Tejas)/prods";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-list1",
  templateUrl: "./product-list1.component.html",
  styleUrls: ["./product-list1.component.css"]
})
export class ProductList1Component implements OnInit {
  public allProds: Iprods[];
  public isActive: boolean = false;
  public btnText: string = "hide";
  public ratingObj: any;
  public search: any;

  constructor(private prodsServices: ProdsServices, private router: Router) {}

  ngOnInit() {
    // API consume
    this.prodsServices.getProds().subscribe(item => {
      this.allProds = item;
      console.log(this.allProds); //checking to see output on console tab
    });
  }

  // Hide image button process

  btnClicked() {
    this.isActive = !this.isActive;
    this.isActive ? (this.btnText = "show") : (this.btnText = "hide");
  }

  backbutton() {
    this.router.navigateByUrl("/home");
  }
}
