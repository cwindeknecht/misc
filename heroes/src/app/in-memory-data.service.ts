import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Farizzi',
      },
    ];
    const users = [
      {
        id: 1,
        username: 'cdub',
        password: 'cdub'
      }
    ]
    return { heroes, users };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty, the method below returns the initial number (0).
  // Otherwise, it returns the highest hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 0;
  }
}