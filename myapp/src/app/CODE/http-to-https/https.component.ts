import { Component } from "@angular/core";

@Component({
  selector: "app-https",
  template: `
    <img src="{{ imgUrl | prohttps: 'http://lorempixel.com/400/200/':true }}" />
  `,
  styles: [``]
})
export class HttpsComponent {
  imgUrl: string = "";
  constructor() {}
}
