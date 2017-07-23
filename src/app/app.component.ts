import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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