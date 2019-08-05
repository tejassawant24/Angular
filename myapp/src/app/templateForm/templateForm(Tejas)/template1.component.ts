import { Component } from "@angular/core";
import { TemplateUser1 } from "../../Shared/model/templateuser1";

@Component({
  selector: "app-template1",
  templateUrl: "../templateForm(Tejas)/template1.component.html",
  styleUrls: ["../templateForm(Tejas)/template1.component.css"]
})
export class Template1Component {
  model = new TemplateUser1();
  constructor() {}
  Save(data) {
    console.log(data);
  }
}
