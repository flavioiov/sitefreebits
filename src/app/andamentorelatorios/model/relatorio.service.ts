import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Relatorio } from './relatorio'
import { ipfuncionamento } from 'src/app/app.component';


const API= ipfuncionamento+'/relatorios'

@Injectable({providedIn: 'root'})


export class RelatorioService{
    
    constructor(private http: HttpClient){}
 
    listar(){
    return this.http
    .get<Relatorio[]>(API+'/listartudo');

    
    
    }
}