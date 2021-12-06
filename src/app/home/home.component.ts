import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter = counter;
  numberOfDay = 24;
  freeDay = 0;
  envPath = "assets/pictures/envelopes/"
  cardPath = "assets/pictures/cards/"

  constructor() { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.freeDay = currentDate.getDate();
    // console.log("DATE:", currentDate, this.freeDay)

  }

}
export const counter = (n: number) => Array.from(Array(n), (_,i)=> i);
export const icounter = (n: number) => Array.from(Array(n), (_,i)=> n-i-1);

