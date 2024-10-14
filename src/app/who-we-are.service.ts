import { Injectable } from '@angular/core';

export interface WhoWeAre {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WhoWeAreService {

  private whoWeAres: WhoWeAre[] = [
    {
      id: 1,  
      title: "Who We Are",
      image: "assets/image/gamer.jpg",  
      description: "Shadow Black is a gaming team we formed with a focus on competing in popular games like Dota 2, Valorant, and CS Our team emphasizes strong collaboration and well-thought-out strategies, with the goal of dominating opponents through smart tactics and swift execution. The name Shadow Black reflects our identity, rooted in stealth and hidden strength, aligned with a gameplay philosophy that prioritizes surprise and precision. As a team, we continuously evolve and strive to be the best in every tournament we participate in.",
      likes: 127
    }
  ];

  constructor() { }

  getWhoWeAres() {
    return this.whoWeAres;
  }

  addLike(index: number) {
    this.whoWeAres[index].likes += 1;
  }
}
