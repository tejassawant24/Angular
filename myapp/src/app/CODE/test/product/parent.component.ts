import { Component } from '@angular/core';

@Component({
    selector: "app-parent",
    template: `
    <app-child (evEmit)="getMobileData($event)"
    [mobileData]="mobiles"
    ></app-child>
    `,
    styles: [``]
})

export class ParentComponent{
    mobiles:{}[];
    getMobileData(item){
         this.mobiles = [
        {
            name: "Galaxy On Nxt(White)",
            price: 12000,
            imgURL: "../assets/img/mobiles/galaxy-on-nxt-white.jpeg",
            rating: "4.3"
        },
        {
            name: "Galaxy On Nxt(Black)",
            price: 13000,
            imgURL: "../assets/img/mobiles/galaxy-on-nxt-black.jpeg",
            rating: "4.4"
        },
        {
            name: "Honor-8x",
            price: 15000,
            imgURL: "../assets/img/mobiles/honor-8x.jpeg",
            rating: "4.5"
        },
        {
            name: "Honor-10(Lite)",
            price: 17000,
            imgURL: "../assets/img/mobiles/honor-h10-lite.jpeg",
            rating: "4.2"
        },
        {
            name: "Redmi Note 7s",
            price: 11000,
            imgURL: "../assets/img/mobiles/redmi-note-7s.jpeg",
            rating: "4.6"
        }
    ];
        if(item){
            this.mobiles.push(item);
        }    
    }
}