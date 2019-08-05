import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-twitter',
    template: `
 <div class="row Heading col-md-12 col-sm-12"> 
  <h1> Twitter Page </h1>
  <i class="fa fa-twitter fa-3x" aria-hidden="true" style="color:blue"></i>
</div>
  <div class="container" >
       
     <div class="row ">
        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
           <img class="img-fluid rounded-circle" src="../assets/img/face2.jpg" alt="userlogo">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-9 col-xs-9">
          <span class="name" >John Doe </span>
          <span class="username">@Mean_Stack_Developer</span> 
        </div>
    </div>
 
     <br/>

    <div class="row">
        <div class="col"> 
        <span class="hastag"> #AngularJS #NodeJS #MongoDB #ExpressJS </span>
        </div>
    </div>
    
    <div class="row">
        <div class="col">
          <h3 style="text-align:left"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </h3>
        </div>
    </div>
     
     <div class="row image">
        <div class="col imagegif">
          <img src="./../../../assets/img/iron man team.gif"  style="margin-left:30px" >
        </div>   
     </div>
 
    <div class="row icon" >
      <div class="col">   
        <i class="fa fa-2x" style="color:red" aria-hidden="true" 
        (click) = "Action()"
        [class.fa-heart-o] = "!isActive"
        [class.fa-heart] = "isActive"
         ></i> {{likes}}        
      </div>
      <div class="col">
        <i class="fa fa-comment-o fa-2x" aria-hidden="true" title="Comments"></i>
      </div>
      <div class="col">
        <i class="fa fa-retweet fa-2x" aria-hidden="true" title="Retweet"></i>
      </div>
      <div class="col" >
        <i class="fa fa-envelope-o fa-2x" aria-hidden="true" title="Messages"></i>
      </div>
   
    </div>  

 
</div>





`
    
    ,
    styles: [`
    div.container{
      border:2px;
      border-style:solid;
      border-color:black;
      padding:20px;
      width:550px;
      height:auto;
    }

    .hastag{
      color:#1DA1F2;
    }
    
    
    div.container div.row span.row{
      padding:20px;

    }

  div.icon{
    margin-top:20px;
  } 
  
  div.image{
    margin-top:20px;
  }
    
  span.name{
    font-size:20px;
    font-weight:bold;
  }  

  span.username{
    font-size:15px;
    color:grey;
  }

  div.Heading{
    width:550px;
    height:auto;
    margin-left:200px;
  }
    `]
})

export class TwitterComponent{
  @Input()  likes;
  isActive:boolean = false;
    Action(){
      this.isActive=!this.isActive;
      this.likes+= this.isActive ? 1 :-1
    }

}

  