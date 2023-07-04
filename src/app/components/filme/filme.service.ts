import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private readonly API = "http://localhost:3000/filmes";
  constructor(private http: HttpClient) { }


  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.API)
  }

  postFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.API, filme)
  }


}
