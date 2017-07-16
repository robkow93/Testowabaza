//root component

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],  //These styles apply only to the AppComponent and don't affect the outer HTML.
  providers: [ HeroService ]
})


export class HeroesComponent implements OnInit{
  

    constructor(private heroService: HeroService) { }

    title = 'Tour of Heroes';
    
    hero: Hero = {
    id: 1,
    name: 'Windstorm'
    };
  
    //heroes = HEROES; //public property that exposes the heroes for binding.
    heroes: Hero[]; //obiekt tablicowy klasy Hero, wiec bedzie zawieral obiekty Hero

    selectedHero: Hero;

    onSelect(hero:Hero){
    this.selectedHero = hero;
  }
  
    /* do synchronicznego pobierania
    getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
    }
    */

    getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    

    ngOnInit(): void {
      this.getHeroes();
    }


}
