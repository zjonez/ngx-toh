import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

private heroesUrl = 'api/heroes';

constructor(private http: Http) { }
// @Injectable()


export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Prommise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        const url = '${this.heroesUrl}/${id}';
        return this.http.get(url)
            .toPromise
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
}