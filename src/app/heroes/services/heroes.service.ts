import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todo el listado de heroes
   * @returns
   */
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  /**
   * Metodo para obtener un heroe por su id
   * @param id
   * @returns
   */
  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  /**
   * Metodo que funciona para manejar el autocomplete
   * @param termino
   * @returns
   */
  getHeroesByNombre(termino: string): Observable<Heroe[]> {
    let params = new HttpParams().set('q', termino).set('_limit', 6);
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`, { params });
  }

  /**
   * Metodo para crear un nuevo heroe
   * @param heroe
   */
  createHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes/`, heroe);
  }

  /**
   * Metodo para actualizar un heroe
   * @param heroe
   * @returns
   */
  updateHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  /**
   * Metodo para eliminar un registro segun su id
   * @param id
   * @returns
   */
  deleteHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
