import { Component } from "@angular/core";

@Component({
  selector: "app-laptop",
  templateUrl: `../assignment6/laptop.component.html`,
  styleUrls: ["../assignment6/laptop.component.css"]
})
export class LAPTOP {
  laptopproduct = [
    {
      name: "Acer Nitro 5 Ryzen 5 Quad Core",
      imgURL:
        "./../../../assets/img/Laptop/Acer Nitro 5 Ryzen 5 Quad Core -.jpeg",
      price: 20000
    },

    {
      name: "Acer Predator Helios 300 Core i7 9th Gen",
      imgURL:
        "./../../../assets/img/Laptop/Acer Predator Helios 300 Core i7 9th Gen.jpeg",
      price: 350000
    },

    {
      name: "Apple MacBook Air Core i5 8th Gen",
      imgURL:
        "./../../../assets/img/Laptop/Apple MacBook Air Core i5 8th Gen.jpeg",
      price: 420000
    },

    {
      name: "Asus ROG Strix G Core i5 9th Gen",
      imgURL:
        "./../../../assets/img/Laptop/Asus ROG Strix G Core i5 9th Gen.jpeg",
      price: 250000
    },

    {
      name: "Asus ROG Zephyrus S Core i7 9th Gen ",
      imgURL:
        "./../../../assets/img/Laptop/Asus ROG Zephyrus S Core i7 9th Gen .jpeg",
      price: 78000
    },

    {
      name: "Asus ROG Zephyrus S Core i7 9th Gen",
      imgURL:
        "./../../../assets/img/Laptop/Asus ROG Zephyrus S Core i7 9th Gen.jpeg",
      price: 987000
    },

    {
      name: "Asus VivoBook 14 Core i5 8th Gen",
      imgURL:
        "./../../../assets/img/Laptop/Asus VivoBook 14 Core i5 8th Gen .jpeg",
      price: 87800
    },

    {
      name: "HP 15q Core i3 7th Gen",
      imgURL:
        "./../../../assets/img/Laptop/HP 15q Core i3 7th Gen - (8 GB:1 TB HDD:DOS) 15q-ds0017TU Laptop.jpeg",
      price: 8300
    },

    {
      name: "HP Pavilion x360 Core i3 8th Gen",
      imgURL:
        "./../../../assets/img/Laptop/HP Pavilion x360 Core i3 8th Gen.jpeg",
      price: 211000
    }
  ];
}
