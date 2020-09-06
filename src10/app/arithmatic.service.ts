import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  Add() {
    return [
      {"Addition": 10+5}
    ];
  }

  Sub() {
    return [
      {"Substraction": 10-5}
    ];
  }
}
