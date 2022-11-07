import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorDetailResponse } from 'src/app/models/interfaces/actor-detail';
import { ActorDetailService } from 'src/app/services/actor-detail.service';


@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actor: ActorDetailResponse;
  id: number;

  constructor(private actorDetailService: ActorDetailService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if(this.id) {   
      this.getById();     
    }
  }

  getById() {
    this.actorDetailService.getById(this.id).subscribe((user: ActorDetailResponse) => {
      this.actor = user;
    });
  }
  


  /*
  getActor(id: number): void {
    this.actorService.getAll().subscribe((res) => {
      this.actorList = res.results;
    });
    console.log(this.actorList);
    if(this.actorList){
      this.actorList.forEach(actor => {
        if(actor.id === id) {
          this.actorDetailService.getById(id).subscribe((resp) => {
            this.actor = resp
          });
        }
      });
    }
  }

  /*
  getById(id: number) {
    this.actorDetailService.getById(id).subscribe( res => {
      this.actorList = res.results;
      this.actor = this.actorList.filter((actor: Actor) => actor.id === id)? this.actorList.filter((actor: Actor) => actor.id === id)[0] : null;
    }, (error) =>{
      console.log(error);
      debugger;
    });
  }
  */

}
