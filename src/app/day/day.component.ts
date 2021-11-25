import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  user:string = '';
  day:number = 0;
  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null)
    {
      this.day = +(this.route.snapshot.paramMap.get('id') as string);
    }
    if (this.route.snapshot.paramMap.get('user')  != null)
    {
      this.user = this.route.snapshot.paramMap.get('user') as string;
    }
  }

}
