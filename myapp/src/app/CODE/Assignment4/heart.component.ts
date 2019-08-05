import { Component } from '@angular/core';

@Component({
  selector: 'app-heart',
  template: ` <app-twitter [likes]="b"></app-twitter>`,
  styles: [``]
})
export class HeartComponent {
  b = 10;
}
