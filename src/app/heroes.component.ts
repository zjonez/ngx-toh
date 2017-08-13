import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html', // sabi sa instructions imove daw yung <h1>{{title}}</h1> pati yung <my-heroes></my-heroes> sa app.component.
  styleUrls: ['./app.component.css'],
  providers: [
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
