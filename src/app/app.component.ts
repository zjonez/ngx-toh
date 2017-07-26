import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

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
          <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} details!</h2>
             <div><label>id: </label>{{selectedHero.id}}</div>
             <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name">
              </div>
          </div>   
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
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  heroes = HEROES;
  };

  

const HEROES: Hero[] = [
    { id: 11, name: 'Link of Hyrule' },
    { id: 12, name: 'Noctis of Insomnia' },
    { id: 13, name: 'Aloy of the Nora' },
    { id: 14, name: 'Big Boss of the Diamond Dogs' },
    { id: 15, name: 'Bayonetta of the Umbra' },
    { id: 16, name: 'Joker of the Phantom Thieves' },
    { id: 17, name: 'Death of the Four Horsemen' },
    { id: 18, name: 'Ryu of the Brood' },
    { id: 19, name: '2B of the YorHa' },
    { id: 20, name: 'Geralt of Rivia' },
];
