import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-ac",
  templateUrl: `../assignment6/ac.component.html`,
  styleUrls: [`../assignment6/ac.component.css`]
})
export class AC {
  acproduct = [
    {
      name: "Hitachi 1 Ton 4 Star Split Inverter AC - White",
      imgURL:
        "./../../../assets/img/AC/Hitachi 1 Ton 4 Star Split Inverter AC - White.jpeg",
     
      price: 20000,
      discountPrice: 15000
    },

    {
      name: "Hitachi 1.5 Ton 3 Star Split Inverter AC - White",
      imgURL:
        "./../../../assets/img/AC/Hitachi 1.5 Ton 3 Star Split Inverter AC - White.jpeg",
     
      price: 350000,
      discountPrice: 339999
    },

    {
      name: "Hitachi 2 Ton 4 Star Split Inverter AC - White",
      imgURL:
        "./../../../assets/img/AC/Hitachi 2 Ton 4 Star Split Inverter AC - White.jpeg",
    
      price: 420000,
      discountPrice: 415999
    },

    {
      name: "Lloyd 1.2 Ton 3 Star Split Inverter AC - White",
      imgURL:
        "./../../../assets/img/AC/Lloyd 1.2 Ton 3 Star Split Inverter AC - White .jpeg",
      
      price: 250000,
      discountPrice: 219999
    },

    {
      name: "MarQ by Flipkart 1 Ton 5 Star Split Inverter AC",
      imgURL:
        "./../../../assets/img/AC/MarQ by Flipkart 1 Ton 5 Star Split Inverter AC - White.jpeg",
    
      price: 78000,
      discountPrice: 71999
    },

    {
      name: "MarQ by Flipkart 1.2 Ton 3 Star Split Inverter AC",
      imgURL:
        "./../../../assets/img/AC/MarQ by Flipkart 1.2 Ton 3 Star Split Inverter AC -.jpeg",
      
      price: 987000,
      discountPrice: 985000
    },

    {
      name: "MarQ by Flipkart 1.5 Ton 5 Star Split Inverter AC",
      imgURL:
        "./../../../assets/img/AC/MarQ by Flipkart 1.5 Ton 5 Star Split Inverter AC - White  .jpeg",
    
      price: 87800,
      discountPrice: 86000
    },

    {
      name: "Voltas 1 Ton 3 Star Split Inverter AC - White ",
      imgURL:
        "./../../../assets/img/AC/Voltas 1 Ton 3 Star Split Inverter AC - White .jpeg",
     
      price: 8300,
      discountPrice: 7000
    },

    {
      name: "Voltas 1.5 Ton 4 Star Split Inverter AC",
      imgURL:
        "./../../../assets/img/AC/Voltas 1.5 Ton 4 Star Split Inverter AC - White.jpeg",
     
      price: 211000,
      discountPrice: 157000
    }
  ];
}
