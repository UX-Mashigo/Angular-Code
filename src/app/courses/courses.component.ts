import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
   templateUrl: './courses.component.html',
   
   //`<h2>{{title}}</h2>       
  //           <ul>
  //             <li *ngFor="let course of courses">
  //               {{course}}
  //             </li>
  //           </ul>
  //           <input [disabled]="true" type="text" id="{{myId}}" value="unite">
  //           <h2 [style.color]="'purple'">unite mashigo</h2>
  // `,,
  styleUrls: ['./courses.component.css']
})  
export class CoursesComponent implements OnInit {
  title='UniteAngular peactice';
  courses= ["course1","course2","course3"];
  isDisabled=true;
  myId="testId";
  public titleStyles={
    color: "blue",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event);
    console.log('welcome to code');
  }

  logMessage(value){
    console.log(value);
  }
}
