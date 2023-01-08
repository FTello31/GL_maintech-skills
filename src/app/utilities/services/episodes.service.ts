import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisodeResponse } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private baseApiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes(url?: string): Observable<IEpisodeResponse> {
    let api = this.baseApiUrl;
    if (url) api = url;
    console.log(url);
    return this.http.get<IEpisodeResponse>(`${api}`);
  }
}
