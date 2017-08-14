import { Component } from '@angular/core';
<<<<<<< HEAD
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

const HEROES: Hero[] = [
  { id: 1, name: 'Link of Hyrule' },
  { id: 2, name: 'Noctis of Insomnia' },
  { id: 3, name: 'Aloy of the Nora' },
  { id: 4, name: 'Big Boss of the Diamond Dogs' },
  { id: 5, name: 'Bayonetta of the Umbra' },
  { id: 6, name: 'Joker of the Phantom Thieves' },
  { id: 7, name: 'Death of the Four Horsemen' },
  { id: 8, name: 'Ryu of the Brood' },
  { id: 9, name: '2B of the YorHa' },
  { id: 10, name: 'Geralt of Rivia' }
];
@Component({
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <h2>Heroes of Legend</h2>
            <ul class="heroes">
              <li *ngFor="let hero of heroes" 
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
            <hero-detail [hero]="selectedHero"></hero-detail>
              `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 20em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {
  title = 'Video Game Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


=======


@Component({
    selector: 'my-app',
    templateUrl: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
        `
})

export class AppComponent {
    title: string = 'Hon';
}
>>>>>>> 5ee0f06caede741ebd7cb689af35fa8efbb217cc
