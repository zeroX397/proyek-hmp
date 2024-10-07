import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface ScheduleDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  date: Date;
  team: string;
}

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  id!: number;
  event!: ScheduleDetail;

  schedule: ScheduleDetail[] = [
    {
      id: 1,
      title: "Regional Qualifier - PUBG MOBILE",
      description: "The Regional Qualifier is set to be an electrifying event that gathers the most skilled teams in the region for an intense showdown. As they battle for a coveted spot in the national finals, fans can expect strategic gameplay, thrilling action, and standout performances from top contenders. Whether you're a die-hard fan or new to the scene, this event promises to deliver adrenaline-pumping moments that showcase the best in competitive gaming. Get ready for an unforgettable display of teamwork, skill, and determination.",
      image: "assets/image/event_esport.jpg",
      location: "Jakarta",
      date: new Date('2024-09-09'), 
      team: "Team Liquid"
    },
    {
      id: 2,
      title: "International Championship - Valorant",
      description: "The International Championship brings together the best Valorant teams worldwide for a high-stakes competition. This event will showcase top-level strategies, precise executions, and intense action as teams fight for the championship title. Fans will witness incredible plays and surprising upsets in this tournament.",
      image: "assets/image/event_esport.jpg",
      location: "Zimbawe",
      date: new Date('2024-09-23'), 
      team: "Team Elips"
    },
    {
      id: 3,
      title: "Finals - CS:GO",
      description: "The CS:GO Finals will feature the most skilled teams from the region, competing for the grand prize. With every round critical, expect thrilling plays, strategic smoke grenades, and masterful teamwork. This event will highlight the very best of CS:GO talent and tactics.",
      image: "assets/image/event_esport.jpg",
      location: "Barcelona",
      date: new Date('2024-10-09'), 
      team: "Team Two 1"
    },
    {
      id: 4,
      title: "National Qualifier - Dota 2",
      description: "The National Qualifier for Dota 2 is the gateway to the grand finals, bringing together the best teams in the nation. Teams will need to show their mastery of hero skills, map control, and game-changing tactics. This event will be packed with epic comebacks, intense clashes, and ultimate triumphs.",
      image: "assets/image/event_esport.jpg",
      location: "Bali",
      date: new Date('2024-11-19'), 
      team: "Team Eclipse"
    }

  ];

  constructor(
    private route: ActivatedRoute, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.event = this.schedule.find(e => e.id === this.id)!;
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
