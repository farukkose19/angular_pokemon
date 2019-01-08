import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Pokemon } from '../models/Pokemon';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(
    private api: ApiService,
    private cookieService: CookieService,
    ) { }

    /*
    angular'a veri ngoninit metodu ile gelir.
    bu componentte ise pokemon listesini ekrana getirmek için api isimli serviste tanımlanmış olan getPokemons isimli metod kullanıldı.
    bu metod subscribe komutu ile parçalandı.
    gelen pokemon listesi pokemons isimli değişkene atandı.
    bu değişken kullanılarak html'de resimler ekrana basıldı.
    eğer veri çekme hatası olursa error isimli değişkene atanan hata konsola basılacak.
    */
  ngOnInit() {
    this.api.getPokemons().subscribe(res => {
      this.pokemons = res.cards;
    }, error => {
      console.log(error);
    });
  }

    /*
    herhangibir pokemona tıklanıldığında bu metod çalışır.
    tıklanan pokemonun datası bu metoda gelir.
    pokemonun id'si cookie'ye atılır ve sayfa yönlendirilir.
    */
  pokemon_detail(pokemon: Pokemon) {
    this.cookieService.set('pokemon_id', pokemon.id);
    window.location.href = '/detail';
  }

}
