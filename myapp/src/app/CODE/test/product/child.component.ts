import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-child",
    template: `
    <h2>Child Component</h2>
    <button type="button" class="btn btn-outline-primary childBtn"
    (click)="AddMobile()"
    >Click Me</button>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mobilecontainer" *ngFor='let md of mobileData'>
                <img class="row img-fluid mx-auto d-block" src={{md.imgURL}}>
                <p class="row name">Name:{{md.name}}</p>
                <p class="row price">Price:{{md.price}}</p>
                <p class="row rating">Rating:{{md.rating}}</p>      
            </div>
        </div>
    </div>
    
    `,
    styles: [`
    .childBtn{
        margin: 10px 30px 30px 30px;
    }
    
    div.mobilecontainer{
        margin: 0px 30px 30px 30px;
        border: 2px solid lightgrey;
    }

    img{
        padding-top:10px;
    }

    p.name, p.price, p.rating{
        padding: 10px 10px 0px 10px;
        text-align: center;
        font-size: 14px;
    }

    `]
})

export class ChildComponent{
    @Input() mobileData:Array<object>;
    @Output() evEmit = new EventEmitter();
    AddMobile(){
        let newMobile ={
                name: "RealMe C2",
                price: 9000,
                imgURL: "../assets/img/mobiles/realme-c2.jpeg",
                rating: "4.0"
            };  
        this.evEmit.emit(newMobile);
    }
}