import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemon.service';



@Component({
  selector : 'list-pokemon',
  templateUrl: './list-pokemon.component.html',

})

export class ListPokemonComponent implements OnInit{

  private _pokemons: Pokemon [] = null;

  constructor ( private router : Router) {

  }

  get pokemons () {
    return this._pokemons;
  }


  ngOnInit() {
    this._pokemons = POKEMONS;
  };

  selectPokemon(pokemon : Pokemon){
      alert("Vous avez cliqué sur "+ pokemon.name);
      let link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
  }

}


