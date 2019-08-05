import { Component } from "@angular/core";
import { Devices } from "./device";

@Component({
  selector: "app-laptop10",
  template: `
    <ul *ngFor="let a of laptop">
      <li>{{ a }}</li>
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
export class LaptopBrandComponent {
  laptop: string[];
  constructor(l: Devices) {
    this.laptop = l.getlaptopbrand();
  }
}
