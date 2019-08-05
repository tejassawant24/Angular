import {Component} from '@angular/core';
import{Table} from './record';


@Component({
  selector: 'app-data',
  template:`
  <h1>Table Records</h1>
  <br>
  <h2>User Record</h2>
  <table class="table table-striped table-dark">
  <thead>
  <tr>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody> 
  <tr *ngFor='let user of userdata'>
  <td>{{user.username}}</td>
  <td>{{user.password}}</td>
  <td>{{user.email}}</td>
  <td>{{user.address}}</td>
  </tr>
  </tbody>
  </table>
  
  <h2>Course Record</h2>
  <table class="table table-bordered table-hover">
  <thead class="thead-dark">
  <tr>
  <th>
  Author
  </th>
  <th>
  Title
  </th>
  <th>
  Price
  </th>
  <th>
  Published Date
  </th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor='let course of coursedata'>
  <td>{{course.author}}</td>
  <td>{{course.title}}</td>
  <td>{{course.price}}</td>
  <td>{{course.publishedDate}}</td>
  </tr>
  </tbody>
  </table>
  `,
  styles:[`
  h2{
      text-decoration: underline;
  }
  table{
      width: 90%;
      margin: 30px 30px 30px 30px;
    }
  td{
      font-size: 12px;
  }
  thead{
      font-size: 16px;
  }  
  `]

  

})

export class Data {
  userdata:{}[];
  coursedata:{}[];

  constructor(d:Table){
    this.userdata= d.UserRecord();
    this.coursedata=d.CourseRecord();
  }
}