import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../model/video';

import { ipfuncionamento } from 'src/app/app.component';

const API = ipfuncionamento+'/videos'

@Injectable({providedIn: 'root'})


export class VideoService{
    
    constructor(private http: HttpClient){}
 
    listar(){
    return this.http
    .get<Video[]>(API+'/listartudo');


    }
}