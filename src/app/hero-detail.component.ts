import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="selectedHero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>  
        <div>
        <h1>{{title}}</h1>
            <h2>Heroes of Legend</h2>
        </div>
    `
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}