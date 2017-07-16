//to jest root module, sklada sie z komponentow

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';  // <-- NgModel lives here
//import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'; //musi byc zeby mogl byc wyswietlony
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';

import { HeroService }         from './hero.service';
//import { RouterModule }   from '@angular/router';  //juz niepotrzeba go bo dodalismy modul routingu
import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent
    
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent] 
})

export class AppModule { }



