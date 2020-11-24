import { Component } from '@angular/core'

@Component({
  selector : 'page-404',
  template:`
    <div class = 'center'>
    <img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"/>
    <h1>Hey, cette page n'exisite pas ! </h1>
    <a routerLink = "/pokemons" class = "waves-effect waves-teal btn-flat"> Retourne à l'accueil </a>
    </div>
    `
})

export class PageNotFoundComponent { }

