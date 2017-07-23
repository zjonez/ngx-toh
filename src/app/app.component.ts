import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>
      <b>id: </b> {{hero.id}} <br>
      <b>name: </b> {{hero.name}} <br>
      {{hero | json}}
    </h2>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tour of shit';
  
  hero: Hero = {
    id: 1,
    name: 'juancho'
  }
}
