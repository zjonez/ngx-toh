<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
>>>>>>> 5ee0f06caede741ebd7cb689af35fa8efbb217cc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeroDetailComponent
=======
    HeroDetailComponent,
    HeroesComponent
>>>>>>> 5ee0f06caede741ebd7cb689af35fa8efbb217cc
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
<<<<<<< HEAD
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


=======
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
>>>>>>> 5ee0f06caede741ebd7cb689af35fa8efbb217cc
