import { Component, OnInit } from '@angular/core';
import { counter } from '../home/home.component';

@Component({
  selector: 'app-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.scss']
})
export class SnowComponent implements OnInit {

  counter = counter;
  totalSnowflake = 200;
  constructor() { }

  ngOnInit(): void {
  }

}
