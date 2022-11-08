import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavoriteMoviesResponse } from '../models/interfaces/favoriteMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor(private http: HttpClient) { }

  getMovies(accountId: number):Observable<FavoriteMoviesResponse>{
    return this.http.get<FavoriteMoviesResponse>(`${environment.API_BASE_URL}/acount/${accountId}/favorite/movies?api_key=${environment.API_KEY}&language=en-US&page=1&sort_by=created_at.asc`)
  }

}
