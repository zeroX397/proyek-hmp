import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService, ScheduleDetail } from '../schedule.service';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {

  schedules: ScheduleDetail[] = [];

  constructor(
    private router: Router, 
    private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.schedules = this.scheduleService.schedules;
  }

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
