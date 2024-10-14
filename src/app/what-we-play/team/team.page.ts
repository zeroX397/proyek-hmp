import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService, Team } from 'src/app/game.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  teams: Team[] = [];
  gameId!: number;

  constructor(
    public route: ActivatedRoute,
    public gameService: GameService,
    public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
      this.teams = this.gameService.getTeamsByGameId(this.gameId);
    });
  }

  toTeamMembers(teamId: number) {
    this.router.navigate(['/team-member', teamId]);
  }

  getGameImage(): string {
    return this.gameService.getGameImage(this.gameId);
  }

}
