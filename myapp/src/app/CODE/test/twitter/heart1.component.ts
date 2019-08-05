import { Component , EventEmitter, Output} from '@angular/core';

@Component({
    selector: "app-hlike",
    template: `
    <i class="fa" aria-hidden="true" title="Like"
    (click) = "Action()"
    [class.fa-heart-o] = "!isActive"
    [class.fa-heart] = "isActive"
    ></i>        
    `,
    styles: [`
    i {
        padding: 5px 5px 5px 5px;
    }
    i.fa-heart{
        color: red;
    }
    `]
})

export class hLikeComponent{
    isActive:boolean = false;
    like:number = 0;

    @Output() evEmit = new EventEmitter();
    Action(){
        this.isActive = !this.isActive;
        if(this.isActive){
            this.like += 1;
        }
        if(!this.isActive){
            this.like -= 1;
        }
        this.evEmit.emit(this.like);
    }
}