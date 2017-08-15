import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],
  providers: [
=======
  styleUrls: ['./heroes.component.css'],
  providers: [ //@JESSE kahit wala na to, kc nakalagay naman siya sa app.module(naging global service siya)
>>>>>>> 1c828a4277c7acf21d25b86d3d6733d361af08e9
    // HeroService
  ]
})

export class HeroesComponent implements OnInit {
  // title: string = 'Hon';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService
      // .getHeroes()
      .getHeroesSlowly()
      .then(heroes => this.heroes = heroes);
  }
}
