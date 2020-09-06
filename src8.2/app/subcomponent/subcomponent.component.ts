import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
/*Q.1.
export class SubcomponentComponent implements OnInit 
{
  
  childData = "";
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
 
  // Action listener for button
  SendEvent(value)
  {
    this.MyEvent.emit(value);
  }
  constructor() { }
  
  ngOnInit() {
  }
}*/

export class SubcomponentComponent implements OnInit
{
  @Input() public parentData;
  @Output() public MyEvent = new EventEmitter();

  public SendToParent()
  {
    // Send the event to parent
    this.MyEvent.emit('Hello Parent Component');
  }

  constructor() { }
  
  ngOnInit() {
  }
}

