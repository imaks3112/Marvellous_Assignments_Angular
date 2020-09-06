import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'Assignment 8';
  public UserName = "";

  public AcceptData(value)
  {
    console.log(value.length);
  }
}
