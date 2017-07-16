import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {


/* to jest do synchronicznego , z pliku itd

  getHeroes(): Hero[] {               //funkcja zwracjaaca cos co jest typu tablicowego i ma obiekty klasy Hero
  return HEROES;                      // a jest tym cala tablica hero
  }

*/

getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}

//na potrzeby :id w linku
getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}