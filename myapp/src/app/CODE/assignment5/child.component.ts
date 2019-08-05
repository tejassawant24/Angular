import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-display",
  template: `
    <img
      class="image"
      src="../../../assets/img/mobile/iphone xs max.jpg"
      [style.display]="display"
    />
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="button"
      aria-pressed="false"
      autocomplete="off"
      (click)="Addmobile()"
    >
      Add To Cart
    </button>
    <div container>
      <div class="row">
        <div
          class="col-md-3 col-sm-12 mobilecontainer"
          *ngFor="let data of mobilelist"
        >
          <img class="row img-fluid mx-auto d-block" src="{{ data.imgURL }}" />
          <span class="row name">Name:{{ data.name }}</span>
          <span class="row price">Price:{{ data.price }}</span>
          <span class="row rating">Rating:{{ data.rating }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .image {
        margin-left: 500px;
      }
      span.name {
        margin-left: 120px;
      }

      span.price {
        margin-left: 120px;
      }
      span.rating {
        margin-left: 120px;
      }
      div.mobilecontainer {
        margin: 50px 25px 10px 70px;
        border: solid 1px #007bff;
        padding: 50px 0px 50px 0px;
      }
    `
  ]
})
export class product1Component {
  constructor() {}
  display: string;
  @Input() mobilelist: {}[];
  @Output() Eid = new EventEmitter();
  Addmobile() {
    let newmobile = {
      name: "Iphone XS Max",
      price: 9000,
      imgURL: "../../../assets/img/mobile/iphone xs max.jpg",
      rating: "4.0"
    };

    this.Eid.emit(newmobile);

    this.display = "none";
  }
}
