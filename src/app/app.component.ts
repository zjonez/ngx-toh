import { Component } from '@angular/core';


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