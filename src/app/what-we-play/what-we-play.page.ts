import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService, Game } from '../game.service';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  games: Game[] = [];

  constructor(
    private router: Router, 
    private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  toAchievement(id: number) {
    this.router.navigate(['/achievement', id]);
  }

  toTeams(id: number) {
    this.router.navigate(['/team', id]);
  }
}
