import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public sum = [];
  public sub = [];

  constructor(private arithmaticService:ArithmaticService) { }

  ngOnInit(): void {
    this.sum = this.arithmaticService.Add();
    this.sub = this.arithmaticService.Sub();
  }

}