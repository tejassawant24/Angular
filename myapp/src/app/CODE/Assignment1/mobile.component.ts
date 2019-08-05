import { Component } from "@angular/core";
import { Devices } from "./device";

@Component({
  selector: "app-mobile10",
  template: `
    <ul *ngFor="let b of mobile">
      <li>{{ b }}</li>
    </ul>
  `,
  styles: [
    `
      ul li {
        list-style-type: none;
      }
    `
  ]
})
export class MobileBrandComponent {
  mobile: string[];
  constructor(m: Devices) {
    this.mobile = m.getmobilebrand();
  }
}
