import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
<<<<<<< HEAD
    templateUrl:'./app.component.html'
=======
    // @JESSE: template url ung nakalagay dito instead of template
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
        `
>>>>>>> 1c828a4277c7acf21d25b86d3d6733d361af08e9
})

export class AppComponent {
    title: string = 'Hon';
}
