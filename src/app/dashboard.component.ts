import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component ({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    
    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        
        // get data from hero service
        this
            .heroService
            .getHeroes()
            .then(heroesFromService => {
                this.heroes = heroesFromService.slice(0, 4)
            });
    }
}
