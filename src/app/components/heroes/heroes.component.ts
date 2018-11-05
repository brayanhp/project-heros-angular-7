import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) {

  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }

  viewHero(id: number) {

    this.router.navigate( ['/heroe', id] );

  }

}
