import { Component } from "@angular/core";

@Component({
  selector: "app-send",
  template: `
    <div class=" btncontainer">
      <div class="row">
        <div class="col-md-2">
          <button
            type="button"
            class="btn btn-large btn-block btn-primary  btn3d"
            (click)="viewdata = 'Mobile'"
          >
            <span class="glyphicon glyphicon-cloud"></span>
            Mobile
          </button>

          <button
            type="button"
            class="btn btn-large btn-block btn-primary btn3d"
            (click)="viewdata = 'AC'"
          >
            <span class="glyphicon glyphicon-cloud"></span>
            AC
          </button>

          <button
            type="button"
            class="btn btn-large btn-block btn-primary btn3d"
            (click)="viewdata = 'Laptop'"
          >
            <span class="glyphicon glyphicon-cloud"></span>
            Laptop
          </button>

          <button
            type="button"
            class="btn btn-large btn-block btn-primary btn3d"
            (click)="viewdata = 'TV'"
          >
            TV
          </button>
        </div>
        <div class="col-md-10" *ngIf="viewdata" [ngSwitch]="viewdata">
          <app-tv *ngSwitchCase="'TV'"></app-tv>

          <app-ac *ngSwitchCase="'AC'"></app-ac>

          <app-laptop *ngSwitchCase="'Laptop'"></app-laptop>

          <app-Mobile *ngSwitchCase="'Mobile'"></app-Mobile>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .btn3d {
        position: relative;
        top: -6px;
        border: 0;
        transition: all 40ms linear;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 2px;
        margin-right: 2px;
      }
      .btn3d:active:focus,
      .btn3d:focus:hover,
      .btn3d:focus {
        -moz-outline-style: none;
        outline: medium none;
      }
      .btn3d:active,
      .btn3d.active {
        top: 2px;
      }
      .btn3d.btn-primary {
        box-shadow: 0 0 0 1px #417fbd inset,
          0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #4d5bbe,
          0 8px 8px 1px rgba(0, 0, 0, 0.5);
        background-color: #4274d7;
      }
      .btn3d.btn-primary:active,
      .btn3d.btn-primary.active {
        box-shadow: 0 0 0 1px #417fbd inset,
          0 0 0 1px rgba(255, 255, 255, 0.15) inset,
          0 1px 3px 1px rgba(0, 0, 0, 0.3);
        background-color: #4274d7;
      }
    `
  ]
})
export class List {
  tv;
  ac: Array<object>;
  laptop: Array<object>;
  mobile: Array<object>;
  viewdata: string;
}
