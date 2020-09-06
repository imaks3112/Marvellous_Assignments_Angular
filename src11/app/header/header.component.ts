import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../sharesService/reports.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public reportsService:ReportsService) { }


  ngOnInit(): void {
    
  }
}
