import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public dName="Hi Codevolution";
  public greeting=" ";
  displayName=true;
  public color="orange";
  public colors=["red","blue","blue","green","yellow"];
  public person={
    "firstName": "John",
    "lastName":"Doe"
  }
  public date= new Date();

  @Input('parentData') public name;
  @Output() public childevent = new  EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  fireEvent(){
    this.childevent.emit('Hey codevolution'); // this is the message we want to send to the parent class
  }

logMessage(value){
  console.log(value);
  this.greeting="Welcome to codevolution";
}
}
