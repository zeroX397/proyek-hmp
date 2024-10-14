import { Injectable } from '@angular/core';

export interface Game {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Team {
  id: number;
  gameId: number;
  name: string;
}

export interface TeamMember {
  id: number;
  teamId: number;
  nickname: string;
  role: string;
  avatar: string;
}

export interface Achievement {
  id: number;
  gameId: number;
  title: string;
  description: string;
  year: number;
  team: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [
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

  private teams: Team[] = [
    { id: 1,  gameId: 1, name: 'Team Secret' },
    { id: 2,  gameId: 1, name: 'Liquid' },
    { id: 3,  gameId: 1, name: 'Genevos' },
    { id: 4,  gameId: 2, name: 'Luminosity Gaming' },
    { id: 5,  gameId: 2, name: 'REJECT WINNITY KR' },
    { id: 6,  gameId: 3, name: 'Team Falcons' },
    { id: 7,  gameId: 4, name: 'BTR Alpha' },
    { id: 8,  gameId: 4, name: 'GD' },
    { id: 9,  gameId: 4, name: 'Four Angry Men' },
    { id: 10, gameId: 3, name: 'Cloud9' },
    { id: 11, gameId: 3, name: 'Myth Avenue Gaming' }
  ];
  

// Data Anggota Tim
private teamMembers: TeamMember[] = [
  // Team 1 - Team Secret
  { id: 1, teamId: 1, nickname: 'ShadowStrike', role: 'Duelist', avatar: 'assets/image/player1.jpg' },
  { id: 2, teamId: 1, nickname: 'ViperX', role: 'Controller', avatar: 'assets/image/player2.jpg' },
  { id: 3, teamId: 1, nickname: 'BladeNova', role: 'Sentinel', avatar: 'assets/image/player3.jpg' },
  { id: 4, teamId: 1, nickname: 'Flash', role: 'Initiator', avatar: 'assets/image/player4.jpg' },
  { id: 5, teamId: 1, nickname: 'Phoenix', role: 'Duelist', avatar: 'assets/image/player5.jpg' },

  // Team 2 - Liquid
  { id: 6, teamId: 2, nickname: 'SniperAce', role: 'Sniper', avatar: 'assets/image/player1.jpg' },
  { id: 7, teamId: 2, nickname: 'Ghost', role: 'Support', avatar: 'assets/image/player2.jpg' },
  { id: 8, teamId: 2, nickname: 'Medic', role: 'Medic', avatar: 'assets/image/player3.jpg' },
  { id: 9, teamId: 2, nickname: 'Tank', role: 'Tank', avatar: 'assets/image/player4.jpg' },
  { id: 10, teamId: 2, nickname: 'Scout', role: 'Scout', avatar: 'assets/image/player5.jpg' },

  // Team 3 - Genevos
  { id: 11, teamId: 3, nickname: 'Invoker', role: 'Midlaner', avatar: 'assets/image/player1.jpg' },
  { id: 12, teamId: 3, nickname: 'Axe', role: 'Offlaner', avatar: 'assets/image/player2.jpg' },
  { id: 13, teamId: 3, nickname: 'AntiMage', role: 'Carry', avatar: 'assets/image/player3.jpg' },
  { id: 14, teamId: 3, nickname: 'CrystalMaiden', role: 'Support', avatar: 'assets/image/player4.jpg' },
  { id: 15, teamId: 3, nickname: 'Earthshaker', role: 'Support', avatar: 'assets/image/player5.jpg' },

  // Team 4 - Luminosity Gaming
  { id: 16, teamId: 4, nickname: 'Thrasher', role: 'Duelist', avatar: 'assets/image/player1.jpg' },
  { id: 17, teamId: 4, nickname: 'Shield', role: 'Tank', avatar: 'assets/image/player2.jpg' },
  { id: 18, teamId: 4, nickname: 'MedicX', role: 'Medic', avatar: 'assets/image/player3.jpg' },
  { id: 19, teamId: 4, nickname: 'Reaper', role: 'Sniper', avatar: 'assets/image/player4.jpg' },
  { id: 20, teamId: 4, nickname: 'GhostHunter', role: 'Controller', avatar: 'assets/image/player5.jpg' },

  // Team 5 - REJECT WINNITY KR
  { id: 21, teamId: 5, nickname: 'SnipeLord', role: 'Sniper', avatar: 'assets/image/player1.jpg' },
  { id: 22, teamId: 5, nickname: 'Rush', role: 'Initiator', avatar: 'assets/image/player2.jpg' },
  { id: 23, teamId: 5, nickname: 'BladeMaster', role: 'Duelist', avatar: 'assets/image/player3.jpg' },
  { id: 24, teamId: 5, nickname: 'Barrier', role: 'Tank', avatar: 'assets/image/player4.jpg' },
  { id: 25, teamId: 5, nickname: 'MedicPro', role: 'Medic', avatar: 'assets/image/player5.jpg' },

  // Team 6 - Team Falcons
  { id: 26, teamId: 6, nickname: 'StormBringer', role: 'Duelist', avatar: 'assets/image/player1.jpg' },
  { id: 27, teamId: 6, nickname: 'Thunder', role: 'Controller', avatar: 'assets/image/player2.jpg' },
  { id: 28, teamId: 6, nickname: 'Fury', role: 'Support', avatar: 'assets/image/player3.jpg' },
  { id: 29, teamId: 6, nickname: 'HawkEye', role: 'Sniper', avatar: 'assets/image/player4.jpg' },
  { id: 30, teamId: 6, nickname: 'Warden', role: 'Tank', avatar: 'assets/image/player5.jpg' },
];


  // Data Achievement
  private achievements: Achievement[] = [
    // Valorant (gameId: 1)
    { id: 1, gameId: 1, title: 'Champions of the Regional Valorant Showdown', description: 'Team Secret wins the regional Valorant showdown', year: 2023, team: 'Team Secret' },
    { id: 2, gameId: 1, title: 'Best Defensive Team Award', description: 'Liquid recognized for defense in 2024', year: 2024, team: 'Liquid' },
    { id: 3, gameId: 1, title: 'Valorant Elite Cup', description: 'Genevos wins the Valorant Elite Cup', year: 2022, team: 'Genevos' },
  
    // Mobile Legends (gameId: 2)
    { id: 4, gameId: 2, title: 'National Champions', description: 'Luminosity Gaming wins the national Mobile Legends championship', year: 2023, team: 'Luminosity Gaming' },
    { id: 5, gameId: 2, title: 'Best MOBA Team', description: 'REJECT WINNITY KR awarded as the best MOBA team', year: 2024, team: 'REJECT WINNITY KR' },
  
    // Dota 2 (gameId: 3)
    { id: 6, gameId: 3, title: 'MVP of the Dota Season', description: 'Team Falcons gets MVP of the Dota season', year: 2023, team: 'Team Falcons' },
    { id: 7, gameId: 3, title: 'Dota Pro Circuit Champions', description: 'Cloud9 wins the Dota Pro Circuit', year: 2022, team: 'Cloud9' },
    { id: 8, gameId: 3, title: 'Dota Battle Royale Winners', description: 'Myth Avenue Gaming wins the Dota Battle Royale', year: 2024, team: 'Myth Avenue Gaming' },
  
    // PUBG (gameId: 4)
    { id: 9, gameId: 4, title: 'PUBG World Championship', description: 'BTR Alpha wins the PUBG World Championship', year: 2023, team: 'BTR Alpha' },
    { id: 10, gameId: 4, title: 'Most Valuable Team Award', description: 'GD recognized as the most valuable PUBG team', year: 2024, team: 'GD' },
    { id: 11, gameId: 4, title: 'Top Battle Royale Team', description: 'Four Angry Men awarded as the top battle royale team', year: 2022, team: 'Four Angry Men' }
  ];
  

  constructor() {}

  getTeams(): Team[] {
    return this.teams;
  }

  getGames(): Game[] {
    return this.games;
  }

  getTeamsByGameId(gameId: number): Team[] {
    return this.teams.filter(team => team.gameId === gameId);
  }

  getTeamMembers(teamId: number): TeamMember[] {
    return this.teamMembers.filter(member => member.teamId === teamId);
  }

  getAchievementsByGameId(gameId: number): Achievement[] {
    return this.achievements.filter(achievement => achievement.gameId === gameId);
  }

  getGameImage(gameId: number): string {
    const game = this.games.find(g => g.id === gameId);
    return game ? game.image : 'assets/image/default.jpg';
  }
}
