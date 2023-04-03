import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;
  existHeroe: boolean = true;

  constructor(private heroesService: HeroesService) {}

  buscando() {
    this.heroesService
      .getHeroesByNombre(this.termino.trim())
      .subscribe((heroes) => {
        this.heroes = heroes;
        if (heroes.length != 0) {
          this.existHeroe = true;
        } else {
          this.existHeroe = false;
        }
      });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    } else {
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroesService.getHeroeById(heroe.id!).subscribe({
        next: (heroe) => {
          this.heroeSeleccionado = heroe;
        },
      });
    }
  }
}
