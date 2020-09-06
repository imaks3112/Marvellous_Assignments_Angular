import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //name = "Marvellous Infosystem";
  txt1 =  "Marvellous Infosystem";
  txt2 = "Educating for better tomorrow";

  public fun()
  {
    this.txt1 = this.txt2;
    //return 'call the fun() function';
  }

  /*
  changeText() {
    this.txt1 = this.txt2;
  }*/

}
