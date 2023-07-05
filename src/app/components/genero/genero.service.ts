import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../genero/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private readonly API = "http://localhost:3000/generos"
  constructor(private http: HttpClient) { }

  getGenero(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.API)
  }
  
  postGenero(genero: Genero): Observable<Genero> {
    return this.http.post<Genero>(this.API, genero)
  }
}



