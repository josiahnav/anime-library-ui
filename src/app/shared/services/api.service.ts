import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeLibraryEntry } from '../models/anime-library-entry';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:3000/api';

  constructor(private _httpClient: HttpClient) { }

  getAnime(limit: number, offset: number): Observable<any> {
    return this._httpClient.get(`${this.url}/library/anime?limit=${limit}&offset=${offset}`);
  }

  getAnimeDetails(id: number): Observable<any> {
    return this._httpClient.get(`${this.url}/library/anime/${id}`);
  }

}
