import { Component } from '@angular/core';

import { Hero } from './hero'; 

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
    hero: Hero;
}