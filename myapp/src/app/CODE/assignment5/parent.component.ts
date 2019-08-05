import { Component } from "@angular/core";

@Component({
  selector: "app-product1",
  template: `
    <app-display
      (Eid)="Mobiledata($event)"
      [mobilelist]="mobiledata"
    ></app-display>
  `,
  styles: [``]
})
export class addedProduct1Component {
  mobiledata: Array<object>;

  Mobiledata(item) {
    this.mobiledata = [
      {
        name: "Iphone 6",
        price: 12000,
        imgURL: "../../../assets/img/mobile/iphone 6/iphone 6.jpg",
        rating: "4.3"
      },
      {
        name: "Samsung S8+ ",
        price: 13000,
        imgURL:
          "../../../assets/img/mobile/s8 plus/samsung-galaxy-s8-plus1.jpg",
        rating: "4.4"
      },
      {
        name: " Samsung Note 9",
        price: 15000,
        imgURL:
          "../../../assets/img/mobile/samsung note 9/ samsung note 9 1.jpg",
        rating: "4.5"
      },
      {
        name: "Iphone X",
        price: 17000,
        imgURL: "../../../assets/img/mobile/iphone X/iphone X.jpg",
        rating: "4.2"
      },
      {
        name: "Vivo Z1 Pro",
        price: 11000,
        imgURL: "../../../assets/img/mobile/vivo z1 pro.jpg",
        rating: "4.6"
      }
    ];
    if (item) {
      this.mobiledata.push(item);
    }
  }
}
