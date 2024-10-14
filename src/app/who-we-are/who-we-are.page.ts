import { Component, OnInit } from '@angular/core';
import { WhoWeAreService, WhoWeAre } from '../who-we-are.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {
  whoWeAres: WhoWeAre[] = [];

  constructor(
    private whoWeAreService: WhoWeAreService) { }

  ngOnInit() {
    this.whoWeAres = this.whoWeAreService.getWhoWeAres();
  }

  likeCounter(index: number) {
    this.whoWeAreService.addLike(index);
  }
}
