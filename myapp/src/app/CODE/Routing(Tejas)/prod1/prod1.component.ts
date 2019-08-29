import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-prod1",
  templateUrl: "./prod1.component.html",
  styleUrls: ["./prod1.component.css"]
})
export class Prod1Component implements OnInit {
  constructor(private AR: ActivatedRoute) {}

  ngOnInit() {
    this.AR.params.subscribe(item => {
      let id = item["id"];
      console.log(id);
    });
  }
}
