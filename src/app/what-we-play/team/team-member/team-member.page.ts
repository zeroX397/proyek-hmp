import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService, TeamMember, Team } from 'src/app/game.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {
  members: TeamMember[] = [];
  teamId!: number;
  teamName!: string;
  gameId!: number; 

  constructor(
    private route: ActivatedRoute, 
    private gameService: GameService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamId = +params['id'];  
      this.members = this.gameService.getTeamMembers(this.teamId);  
      
      const team = this.gameService.getTeams().find(t => t.id === this.teamId);
      if (team) {
        this.teamName = team.name;
        this.gameId = team.gameId; 
      }
    });
  }

  getGameImage(): string {
    return this.gameService.getGameImage(this.gameId);
  }
}
