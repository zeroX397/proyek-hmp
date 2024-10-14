import { Injectable } from '@angular/core';

export interface ScheduleDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  date: Date;
  team: string;
  game: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  schedules: ScheduleDetail[] = [
    {
      id: 1,
      title: "Regional Qualifier - PUBG MOBILE",
      description: "The Regional Qualifier is set to be an electrifying event that gathers the most skilled teams in the region for an intense showdown.",
      image: "assets/image/event_esport.jpg",
      location: "Jakarta",
      date: new Date('2024-09-09'),
      team: "Team Liquid",
      game: "PUBG MOBILE"
    },
    {
      id: 2,
      title: "Finals - CS:GO",
      description: "The CS:GO Finals will feature the most skilled teams from the region, competing for the grand prize.",
      image: "assets/image/event_esport.jpg",
      location: "Barcelona",
      date: new Date('2024-10-09'),
      team: "Team Elips",
      game: "CS:GO"
    },
    {
      id: 3,
      title: "International Championship - Valorant",
      description: "The International Championship brings together the best Valorant teams worldwide for a high-stakes competition.",
      image: "assets/image/event_esport.jpg",
      location: "Zimbabwe",
      date: new Date('2024-09-23'),
      team: "Team Two 1",
      game: "Valorant"
    },
    {
      id: 4,
      title: "National Qualifier - Dota 2",
      description: "The National Qualifier for Dota 2 is the gateway to the grand finals, bringing together the best teams in the nation. Teams will need to show their mastery of hero skills, map control, and game-changing tactics. This event will be packed with epic comebacks, intense clashes, and ultimate triumphs.",
      image: "assets/image/event_esport.jpg",
      location: "Bali",
      date: new Date('2024-11-19'),
      team: "Team Eclipse",
      game: "Dota 2"
    }
  ];

  constructor() { }
}
