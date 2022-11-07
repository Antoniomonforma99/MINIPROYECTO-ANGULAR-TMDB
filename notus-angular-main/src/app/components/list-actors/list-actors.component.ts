import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/interfaces/actor-list';
import { ActorDetailService } from 'src/app/services/actor-detail.service';
import { ListActorsService } from 'src/app/services/list-actors.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {


  actorList: Actor[] = [];

  constructor(private actorService: ListActorsService) { }

  ngOnInit(): void {
    this.getActorList();
  }

  getActorList(){
    this.actorService.getAll().subscribe(res => {
      this.actorList = res.results;
    });
  }

  getPhoto(actor: Actor){
    return `${environment.ACTOR_PHOTO_URL}${actor.profile_path}`
  }

}
