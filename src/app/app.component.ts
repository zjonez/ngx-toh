import { Component } from '@angular/core';
     
export class Hero {
  id: number;
  name: string;
}
     
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'HoN';
  heroes = HEROES;
  selectedHero: Hero = {
    id: 1,  
    name: 'Valkyrie',
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }
}



const HEROES: Hero[] = [
  { id: 11, name: 'Empath' }, 
  { id: 12, name: 'Pebbles' },
  { id: 13, name: 'Predator' },
  { id: 14, name: 'Chronos' },
  { id: 15, name: 'Slither' },
  { id: 16, name: 'Chipper' },
  { id: 17, name: 'Pyromancer' },
  { id: 18, name: 'Witch Hunter' },
  { id: 19, name: 'Magnus' },
  { id: 20, name: 'Zephyr' }
];