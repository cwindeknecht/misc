import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        level: 1,
        health: 5,
        mana: 0,
        gold: 0,
        name: 'Farizzi',
        class: 'Warrior',
        // Make armor/weapon class and subclasses
        helmet: { name: 'Skull Cap', rating: '1', weight: '2' },
        body: { name: 'Leather Armor', rating: '2', weight: '2' },
        shoulders: { name: 'Leather Pads', rating: '1', weight: '1' },
        gloves: { name: 'Leather Gloves', rating: '1', weight: '1' },
        legs: { name: 'Cloth Pants', rating: '1', weight: '2' },
        boots: { name: 'Leather Boots', rating: '1', weight: '1' },
        melee: { name: 'Rusty Short Sword', damage: '2-3', weight: '3' },
        ranged: null,
      },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty, the method below returns the initial number (0).
  // Otherwise, it returns the highest hero id + 1.
  genId(heroes: Hero[]): number {
    console.log();
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}
