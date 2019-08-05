import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-Mobile",
  templateUrl: `../assignment6/mobile.component.html`,
  styleUrls: [`../assignment6/mobile.component.css`]
})
export class MOBILE {
  mobileproduct = [
    {
      name: "Iphone xs max",
      imgURL1:
        "./../../../assets/img/mobile/iphone xs max/iphone xs max 1.jpeg",
      imgURL2:
        "./../../../assets/img/mobile/iphone xs max/iphone xs max 2.jpeg",
      price: 420000,
      discountPrice: 390000
    },

    {
      name: "Iphone X",
      imgURL1: "./../../../assets/img/mobile/iphone X/iphone X.jpg",
      imgURL2: "./../../../assets/img/mobile/iphone X/iphone X 2.jpg",
      price: 350000,
      discountPrice: 320000
    },

    {
      name: "Iphone 6",
      imgURL1: "./../../../assets/img/mobile/iphone 6/iphone 6.jpg",
      imgURL2: "./../../../assets/img/mobile/iphone 6/iphone 6 2.jpg",
      price: 20000,
      discountPrice: 15000
    },

    {
      name: "Real Me X  ",
      imgURL1: "./../../../assets/img/mobile/Real me x/Real me X 1.jpeg",
      imgURL2: "./../../../assets/img/mobile/Real me x/realme-x-2.jpeg",
      price: 25000,
      discountPrice: 21000
    },

    {
      name: "Oppo f9",
      imgURL1: "./../../../assets/img/mobile/oppo f9/oppo-f9-1.jpeg",
      imgURL2: "./../../../assets/img/mobile/oppo f9/oppo-f9-2.jpeg",
      price: 78000,
      discountPrice: 72000
    },

    {
      name: "s8 plus",
      imgURL1:
        "./../../../assets/img/mobile/s8 plus/samsung-galaxy-s8-plus1.jpg",
      imgURL2:
        "./../../../assets/img/mobile/s8 plus/samsung-galaxy-s8-plus2.jpeg",
      price: 987000,
      discountPrice: 90000
    },

    {
      name: "samsung A50",
      imgURL1:
        "./../../../assets/img/mobile/samsung a50/samsung-galaxy-a50-1.jpeg",
      imgURL2:
        "./../../../assets/img/mobile/samsung a50/samsung-galaxy-a50-2.jpeg",
      price: 87800,
      discountPrice: 82000
    },

    {
      name: "samsung s9",
      imgURL1: "./../../../assets/img/mobile/s9/samsung-galaxy-s9-1.jpeg",
      imgURL2: "./../../../assets/img/mobile/s9/samsung-galaxy-s9-2.jpeg",
      price: 83000,
      discountPrice: 79999
    },

    {
      name: "vivo z1 pro",
      imgURL1: "./../../../assets/img/mobile/vivo z1 pro/vivi z1 pro 1.jpg",
      imgURL2: "./../../../assets/img/mobile/vivo z1 pro/vivo z1 pro 2.jpg",
      price: 211000,
      discountPrice: 23000
    }
  ];
}
