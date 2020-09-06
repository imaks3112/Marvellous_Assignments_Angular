import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../sharesService/reports.service';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {

  mytime: Date = new Date();

  constructor(public reportsService:ReportsService) { }

  ngOnInit(): void {
  }

}
