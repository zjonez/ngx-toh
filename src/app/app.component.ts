import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tour of shit';

  hero: Hero = {
    id: 1,
    name: 'JM TANGAs'
  }
  // hero: Hero = {
  //   id: null,
  //   // name: 'juancho'
  //   name: ''
  // }
}
