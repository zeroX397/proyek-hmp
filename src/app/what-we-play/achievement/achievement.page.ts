import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService, Achievement } from 'src/app/game.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  achievements: Achievement[] = [];
  filteredAchievements: Achievement[] = [];
  gameId!: number;
  availableYears: number[] = [];
  selectedYear: number = 0;

  constructor(
    private route: ActivatedRoute, 
    public gameService: GameService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
      this.achievements = this.gameService.getAchievementsByGameId(this.gameId);
      this.availableYears = Array.from(new Set(this.achievements.map(a => a.year)));
      this.filterAchievementsByYear();
    });
  }

  filterAchievementsByYear() {
    console.log("Selected year:", this.selectedYear); 
    if (this.selectedYear === 0) {
      this.filteredAchievements = this.achievements;
    } else {
      this.filteredAchievements = this.achievements.filter(a => a.year === this.selectedYear);
    }
  }
  
}
