import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  /*template:`<h1>Inline HTML Example<h1>
  <h3>AkS is a brand<h2>
  <h2>AkS is a hackerrrrr.....<h3>`*/

  /*
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
    */

})
export class AppComponent {
  title = 'Assignment6';

  name = "This is Interpolition";
  clickMessage = '';

  /*
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
*/
  
}
