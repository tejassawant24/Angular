import {Component} from '@angular/core';



@Component({
  selector: 'app-fm',
  template:`

<div class="container"> 
  <div class="row col-lg-6 col-md-6 col-sm-12 col-xs-12"> 
    
    <button type="button" class="btn btn-primary btn-lg btn-block"
    (click)="action1()"
    [disabled]="display1" 
    >MALE
    </button>
   
    
    
    <button type="button" class="btn btn-primary btn-lg btn-block"
    (click)="action2()"
    [disabled]="display2"
    >FEMALE
    </button>  
    

  </div>
</div>



<div class="container1" *ngIf="viewdata"
[ngSwitch]="viewdata">
  <div class="row "> 
     <div class="MALE"   *ngSwitchCase="'male'" >
        <img src="./../../../assets/img/iron man 4.gif">
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Iron Man </h2> 
     </div>
     
     <div class="FEMALE"  *ngSwitchCase="'female'">
       <img src="./../../../assets/img/black widow.jpg">
       <h2> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Black Widow </h2>
      </div>
</div>
</div> 
  
  `,
  styles:[`
  div.container{
    margin: 100px;
  }
  div.MALE{
    margin-left:170px;
  }
  div.FEMALE{
    margin-left:220px;
  }
  
`
]
})


export class Info{
    viewdata:any
    display1:boolean;
    display2:boolean;
    constructor(){}
    action1(){
      this.viewdata='male'
      this.display1=true
      this.display2=false
      }

    action2(){
      this.viewdata='female'
      this.display1=false
      this.display2=true
    }  
    
}    



