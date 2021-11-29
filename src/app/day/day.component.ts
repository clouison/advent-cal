import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DataBase from '../../assets/data/day-data.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

  interface UserData {
  user: string;
  contents: Day[];
}
interface Day {
  day: number;
  data: Element[];
}
interface Element {
  type: string;
  content: string;
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
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
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

  videoURL(temp: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${temp}?controls=0`);
 }

}
