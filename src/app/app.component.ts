import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    // @JESSE: template url ung nakalagay dito instead of template
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
        `
})

export class AppComponent {
    title: string = 'Hon';
}
