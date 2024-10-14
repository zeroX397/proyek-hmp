import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService, ScheduleDetail } from 'src/app/schedule.service'
import { AlertController } from '@ionic/angular';;

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  id!: number;
  event!: ScheduleDetail;
  
  constructor(
    private route: ActivatedRoute, 
    private scheduleService: ScheduleService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.event = this.scheduleService.schedules.find(e => e.id === this.id)!;
    });
  }

  getDate(date: Date): string {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
  }

  async notif() {
    const alert = await this.alertController.create({
      header: 'Notification',
      message: 'Notification created.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
