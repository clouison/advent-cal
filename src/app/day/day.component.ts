import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DataBase from '../../assets/data/day-data.json';

interface UserData {
  user: string;
  contents: Day[];
}
interface Day {
  day: number;
  message: string;
}

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  user:string = '';
  day:number = 0;
  allData: UserData[] = DataBase;
  data: UserData | undefined = undefined;
  idData = -1;
  dataFound = false;
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
    this.data = this.allData.find(d => d.user === this.user)
    if(this.data)
    {this.idData = this.data?.contents.findIndex( d => d.day === this.day); this.dataFound=true;}
  }

}
