import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product1",
  templateUrl: "./product1.component.html",
  styleUrls: ["./product1.component.css"]
})
export class Product1Component implements OnInit {
  public tvproduct = [
    {
      id: 1,
      name: "Blaupunkt 80cm (32 inch) HD Ready LED TV .jpeg",
      imgURL1:
        "./../../../assets/img/TV/Blaupunkt /Blaupunkt 80cm (32 inch) HD Ready LED TV 1.jpeg",
      imgURL2: "./../../../assets/img/TV/Blaupunkt /Blaupunkt 2.jpeg",
      price: 20000,
      discountPrice: 15000
    },

    {
      id: 2,
      name:
        " Vu Pixel Light(55 inch) Ultra HD (4K) LED Smart Android TV with Netflix",
      imgURL1: "./../../../assets/img/TV/Vu pixel light/vu pixel light1.jpeg",
      imgURL2: "./../../../assets/img/TV/Vu pixel light/vu pixel light 2.jpeg",
      price: 350000,
      discountPrice: 332344
    },

    {
      id: 3,
      name: "Kodak X900 80cm (32 inch) HD Ready LED TV",
      imgURL1:
        "./../../../assets/img/TV/Kodak/Kodak X900 80cm (32 inch) HD Ready LED TV 1.jpeg",
      imgURL2: "./../../../assets/img/TV/Kodak/kodak 2.jpeg",
      price: 420000,
      discountPrice: 399999
    },

    {
      id: 4,
      name: "MarQ by Flipkart Dolby 32 inch(80 cm) HD Ready Smart LED TV",
      imgURL1:
        "./../../../assets/img/TV/MarQ/MarQ by Flipkart Dolby 32 inch(80 cm) HD Ready Smart LED TV 1.jpeg",
      imgURL2: "./../../../assets/img/TV/MarQ/MarQ 2.jpeg",
      price: 250000,
      discountPrice: 230000
    },

    {
      id: 5,
      name: "MarQ by Flipkart Dolby 43 inch(109 cm) Full HD Smart LED TV",
      imgURL1:
        "./../../../assets/img/TV/MarQ/MarQ by Flipkart Dolby 32 inch(80 cm) HD Ready Smart LED TV 1.jpeg",
      imgURL2: "./../../../assets/img/TV/MarQ/MarQ 2.jpeg",
      price: 78000,
      discountPrice: 63000
    },

    {
      id: 6,
      name: "Vu Iconium Ultra HD (4K) LED Smart Android TV ",
      imgURL1: "./../../../assets/img/TV/Vu iconium/Vu Iconium 1.jpeg",
      imgURL2: "./../../../assets/img/TV/Vu iconium/Vu Iconium 2.jpeg",
      price: 987000,
      discountPrice: 892344
    },

    {
      id: 7,
      name: "Samsung NU6100 108cm (43 inch) Ultra HD (4K) LED Smart TV",
      imgURL1:
        "./../../../assets/img/TV/samsung/Samsung NU6100 108cm (43 inch) Ultra HD (4K) LED Smart TV 1.jpeg",
      imgURL2: "./../../../assets/img/TV/samsung/samsung nu6100 2.jpeg",
      price: 87800,
      discountPrice: 72682
    },

    {
      id: 8,
      name: "Thomson B9 Pro 102cm (40 inch) Full HD LED Smart TV",
      imgURL1:
        "./../../../assets/img/TV/Thomson B9 pro 1/Thomson B9 Pro 80cm (32 inch) HD Ready LED Smart TV1.jpeg",
      imgURL2: "./../../../assets/img/TV/Thomson B9 pro 1/thomson b9 2.jpeg",
      price: 8300,
      discountPrice: 7000
    },

    {
      id: 9,
      name: "Thomson B9 Pro 80cm (32 inch) HD Ready LED Smart TV",
      imgURL1:
        "./../../../assets/img/TV/Thomson  b9 pro 2 /Thomson B9 Pro 102cm (40 inch) Full HD LED Smart TV 1.jpeg",
      imgURL2:
        "./../../../assets/img/TV/Thomson  b9 pro 2 /thomson b9 pro 2.jpeg",
      price: 211000,
      discountPrice: 173826
    }
  ];

  constructor() {}

  ngOnInit() {}
}
