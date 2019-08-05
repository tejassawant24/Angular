import { Component } from "@angular/core";
import { TemplateUser } from "../../Shared/model/templateuser";

@Component({
  selector: "app-template",
  templateUrl: "../templateForm(Vipul Sir)/template.component.html",
  styleUrls: ["../templateForm(Vipul Sir)/template.component.css"]
})
export class TemplateComponet {
  model = new TemplateUser();
  constructor() {}
  Save(data) {
    console.log(data);
  }
}
