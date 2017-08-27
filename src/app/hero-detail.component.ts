import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: '/hero-detail.component.html'
    // template: `
    //     <div *ngIf="hero">
    //         <h2>{{hero.name}} details!</h2>
    //         <label>id: </label>{{hero.id}}
    //         <div>
    //             <label>name: </label>
    //             <input [(ngModel)]="hero.name" placeholder="name"/>
    //         </div>
    //         <button (click)="goBack()">Back</button>
    //     </div>
    
})

export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    
    constructor (
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }
    
    goBack(): void {
        this.location.back();
    }
}