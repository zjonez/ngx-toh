import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>
      {{hero.id}}<br>
      {{hero.name}}
    </h2>
  `
})
export class AppComponent {
  title = 'shit of tour';
  hero: Hero = {
    id: 1,
    name: `tae`
  }
}

export class Hero {
  id: number;
  name: string;
}