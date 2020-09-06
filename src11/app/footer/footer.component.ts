import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../sharesService/reports.service';
import { Report } from '../model/report.model';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  allReoprt : Report[];

  constructor(public reportsService:ReportsService) { }

  getAllEmployee(){
    this.reportsService.getAllEmployees().subscribe(
      (data : Report[]) => {
        this.allReoprt = data;
      }
    );
  }

  CreateAndUpdate(currentEmployee: Report){
    console.log('Create');
    this.createEmployee(currentEmployee);
  }

  createEmployee(emp:Report) {
    this.reportsService.createEmployee(emp).subscribe();
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

}
