import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-template',
  templateUrl: './marvellous-template.component.html',
  styleUrls: ['./marvellous-template.component.css']
})
export class MarvellousTemplateComponent implements OnInit 
{
  constructor() { }

  ngOnInit() 
  {
  }

  // Event listener for button
  public AcceptData(value)
  {
    console.log(value);
  }
}
