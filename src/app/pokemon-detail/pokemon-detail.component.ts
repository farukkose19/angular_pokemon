import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Pokemon } from '../models/Pokemon';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private api: ApiService,
    private cookieService: CookieService,
  ) { }

    /*
    secilen pokemonun datası bu metod ile çekilir.
    api isimli serviste tanımlanan getPokemonDetail isimli metod çalıştırılır.
    bu metoda parametre olarak cookie'den çekilen pokemon id'si gönderilir.
    gelen değerler subscribe ile parse edilir.
    sonuc pokemon isimli değişene atanır ve bu değişken html de kullanılır.
    herhangi bir hata ise error isimli değişkene atanır ve bu değişken ekrana basılır.
    */
  ngOnInit() {
    this.api.getPokemonDetail(this.cookieService.get('pokemon_id')).subscribe(res => {
      console.log(res);
      this.pokemon = res.card;

    }, error => {
      console.log(error);
    });
  }

}
