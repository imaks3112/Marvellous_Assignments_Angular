import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  name1 = "Simple Text";
  name2 = "uppercase";
  name3 = "lowercase";
  name4 = "Reverse";
  name5 = "Marvellous";

  ngOnInit(): void {
  }

}
