import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Game {
  id: number; 
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  games: Game[] = [
    {
      id: 1,  
      name: 'Valorant',
      image: 'assets/image/valo.jpg', 
      description: 'VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.'
    },
    {
      id: 2, 
      name: 'Mobile Legends',
      image: 'assets/image/ml.jpg', 
      description: 'Mobile Legends: Bang Bang adalah permainan video seluler bergenre multiplayer online battle arena (MOBA) yang dikembangkan dan diterbitkan oleh Moonton, anak perusahaan dari ByteDance.'
    },
    {
      id: 3,  
      name: 'Dota 2',
      image: 'assets/image/dota.jpg',  
      description: 'Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. Players control powerful characters known as heroes and battle against each other in epic 5v5 matches.'
    },
    {
      id: 4,  
      name: 'PUBG',
      image: 'assets/image/pubg.jpg',  
      description: 'PlayerUnknown\'s Battlegrounds (PUBG) is a battle royale game where up to 100 players fight in a last-man-standing format. It is one of the most popular and influential games in the genre.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  toAchievementDetail(id: number) {
    this.router.navigate(['/achievement-detail', id]);  
  }

  toTeam(id: number) {
    this.router.navigate(['/team', id]);  
  }
}
