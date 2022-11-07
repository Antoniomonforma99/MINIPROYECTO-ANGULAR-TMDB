import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorDetailResponse } from '../models/interfaces/actor-detail';

@Injectable({
  providedIn: 'root'
})
export class ActorDetailService {

  constructor(private http: HttpClient) {}

  getAll():Observable<ActorDetailResponse>{
    return this.http.get<ActorDetailResponse>(`${environment.API_BASE_URL}/person/popular?api_key=${environment.API_KEY}&language=en-US&page=1`);
  }

  getById(id: number): Observable<ActorDetailResponse>{
    return this.http.get<ActorDetailResponse>(`${environment.API_BASE_URL}/person/${id}?api_key=${environment.API_KEY}&language=en-US`)
  }
}
