import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Usuario | undefined;

  get auth() {
    return { ...this._auth };
  }

  constructor(private http: HttpClient) {}

  login(): Observable<Usuario> {
    return this.http
      .get<Usuario>(`${this.baseUrl}/users/1`)
      .pipe(tap((res) => (this._auth = res)));
  }

  logout() {
    this._auth = undefined;
  }
}
