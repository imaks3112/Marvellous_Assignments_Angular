import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  name1="Marvellous ";
  name2="Infosystem";

  changeCase = "Upper Lower";

  changeText(){
    this.name1 = this.name2;
  }

  upper(){
    this.changeCase = this.changeCase.toUpperCase();
  }

  lower(){
    this.changeCase = this.changeCase.toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
    this.name1 + this.name2;
  }

}
