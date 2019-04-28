import { Component, OnInit } from '@angular/core';
import { Video } from './model/video';
import { VideoService } from '../andamentovideos/model/video.service';

@Component({
  selector: 'app-andamentovideos',
  templateUrl: './andamentovideos.component.html',
  styleUrls: ['./andamentovideos.component.css']
})
export class AndamentovideosComponent implements OnInit {

  constructor( private servico : VideoService){ }

  videos: Video[]=[];

  ngOnInit() {

      this.servico.listar().subscribe (
        videos=>{
          console.log(videos);
          this.videos=videos;
        }
      )
     
  }

}
