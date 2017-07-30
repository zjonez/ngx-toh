import { Component } from '@angular/core';
import { Hero } from './hero'; 

// export class Hero {
//   id: number;
//   name: string;
// }



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HoN';
  heroes = HEROES;
  selectedHero: Hero = {
    id: 1,  
    name: 'Valkyrie'
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
  { id: 1, name: 'Empath' }, 
  { id: 2, name: 'Pebbles' },
  { id: 3, name: 'Predator' },
  { id: 4, name: 'Chronos' },
  { id: 5, name: 'Slither' },
  { id: 6, name: 'Chipper' },
  { id: 7, name: 'Pyromancer' },
  { id: 8, name: 'Witch Hunter' },
  { id: 9, name: 'Magnus' },
  { id: 10, name: 'Zephyr' }
];