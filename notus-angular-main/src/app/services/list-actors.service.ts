import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorResponse } from '../models/interfaces/actor-list';

@Injectable({
  providedIn: 'root'
})
export class ListActorsService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ActorResponse>{
    return this.http.get<ActorResponse>(`${environment.API_BASE_URL}/person/popular?api_key=${environment.API_KEY}&language=en-US&page=1`);
  }
}
