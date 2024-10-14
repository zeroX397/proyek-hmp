import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService, TeamMember, Team } from 'src/app/game.service';
import { AnimationController } from '@ionic/angular';

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
    private animationCtrl: AnimationController,
    private gameService: GameService) { }

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

  ionViewDidEnter() {
    this.shrinkGrowAvatar();
  }

  shrinkGrowAvatar() {
    const avatarElements = document.querySelectorAll('#avatar') as NodeListOf<HTMLElement>;
    avatarElements.forEach(avatarElement => {
      const animation = this.animationCtrl
        .create()
        .addElement(avatarElement)
        .duration(5000) // Duration in ms
        .iterations(3) // Do animation 3 times
        .keyframes([
          { offset: 0, transform: 'scale(1)' }, // Start with normal size
          { offset: 0.5, transform: 'scale(1.5)' }, // Grow to 1.2x size
          { offset: 1, transform: 'scale(1)' }, // Back to normal size
        ]);
      animation.play();
    });
  }
}
