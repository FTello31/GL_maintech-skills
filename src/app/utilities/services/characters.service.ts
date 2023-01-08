import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacterResponse } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private baseApiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(url?: string): Observable<ICharacterResponse> {
    let api = this.baseApiUrl;
    if (url) api = url;
    console.log(url);
    return this.http.get<ICharacterResponse>(`${api}`);
  }
}
