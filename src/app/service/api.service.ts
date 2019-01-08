import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from '../models/Cards';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.pokemontcg.io/v1/cards';
  url_detail = 'https://api.pokemontcg.io/v1/cards/';

  constructor(private http: HttpClient) { }

  /*
  pokemon listesi bu servis ile geliyor. Liste cards: Pokemon[] türünde.
  Cards isimli modelde bu türü tanımladım.
  Pokemon isimli başka bir modeli Cards isimli modelde kullandım.
  Pokemon modeli ise "Ability, Attacks, Resistance, Weakness" isimli modelleri içeriyor.
  */
  getPokemons() {
    return this.http.get<Cards>(this.url);
  }

  /*
  pokemon'a tıklanınca detayının gelmesi için bu servisi kullanıyorum.
  bu servise pokemonun id'si geliyor.
  servis bu id'yi kullanarak pokemonun detaylarını getiriyor.
  */
  getPokemonDetail(pokemon_id) {
    return this.http.get<Card>(this.url_detail + pokemon_id);
  }
}
