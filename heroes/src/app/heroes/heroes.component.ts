import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  deleted: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    if (confirm('Are you sure you want to delete' + hero.name + '?')) {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.deleted.push(hero);
      this.heroService.deleteHero(hero).subscribe();
    }
  }

  undo(): void {
    console.log('this.deleted', this.deleted);
    console.log('this.heroes', this.heroes);
    if (this.deleted.length) {
      this.heroes.push(this.deleted[this.delete.length - 1]);
    } else {
      alert('No hero has been deleted recently.');
    }
  }
}
