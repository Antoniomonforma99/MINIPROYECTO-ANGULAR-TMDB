import { Component, OnInit } from '@angular/core';
import { FavoriteMovie } from 'src/app/models/interfaces/favoriteMovies.interface';
import { FavoriteMoviesService } from 'src/app/services/favorite-movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  accountId : number;
  movies: FavoriteMovie[] = [];

  constructor(private moviesService: FavoriteMoviesService) { }

  ngOnInit(): void {
    this.getId();
    console.log(typeof(this.accountId));
    this.getMovies();
  }

  getId(){
    this.accountId = Number(localStorage.getItem('session_id'));
  }

  getMovies(){
    this.moviesService.getMovies(this.accountId).subscribe(res => {
      this.movies = res.results;
    });
  }

  getPhoto(movie: FavoriteMovie){
    return `${environment.ACTOR_PHOTO_URL}${movie.poster_path}`
  }

}
