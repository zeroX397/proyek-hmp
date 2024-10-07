import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Schedule {
  id: number;
  date: Date;
  event: string;
  game: string;
  team: string;
}

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {

  schedule: Schedule[] = [
    {
      id: 1,
      date: new Date('2024-09-09'),
      event: "Regional Qualifier",
      game: "PUBG MOBILE",
      team: "Team Liquid"
    },
    {
      id: 2,
      date: new Date('2024-09-23'),
      event: "Finals",
      game: "CS GO",
      team: "Team Elips"
    },
    {
      id: 3,
      date: new Date('2024-10-09'),
      event: "International Championship",
      game: "Valorant",
      team: "Team Two 1"
    },
    {
      id: 4,
      date: new Date('2024-11-19'),
      event: "National Qualifier",
      game: "Dota 2",
      team: "Team Eclipse"
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  getDay(date: Date): string {
    return date.toLocaleDateString('id-ID', { day: '2-digit' });
  }

  getMonth(date: Date): string {
    return date.toLocaleDateString('id-ID', { month: 'short', year: 'numeric' }).toUpperCase();
  }

  toScheduleDetail(id: number) {
    this.router.navigate(['/schedule-detail', id]); 
  }
}
