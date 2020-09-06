import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Report } from '../model/report.model';

const headerOption = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  mocUrl = "http://localhost:3000/Report";

  constructor(private http:HttpClient) { }

  getAllEmployees() : Observable<Report[]> {
    return this.http.get<Report[]>(this.mocUrl,headerOption);
  }

  createEmployee(emp:Report) : Observable<Report> {
    return this.http.post<Report>(this.mocUrl,emp,headerOption);
  }

  currentEmployee : Report = {
    id:null,
    firstname:'',
    lastname:'',
    Address:'',
    Email:'',
    mytime:null,
    Explaination:''

  }
}
