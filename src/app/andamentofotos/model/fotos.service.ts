import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../model/fotos';

import { ipfuncionamento } from 'src/app/app.component';


const API= ipfuncionamento+'/fotos'

@Injectable({providedIn: 'root'})


export class FotoService{
    
    constructor(private http: HttpClient){}
 
    listar(){
    return this.http
    .get<Foto[]>(API+'/listartudo');

    
    
    }
}