import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  query: string;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService ) {

  }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {

      this.query = params['query'];
      this.heroes = this._heroeService.searcHero(params['query']);

    });

  }



}
