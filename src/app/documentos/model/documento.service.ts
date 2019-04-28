import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from './documento';
import { ipfuncionamento } from 'src/app/app.component';


const API= ipfuncionamento+'/documentos'

@Injectable({providedIn: 'root'})


export class DocumentoService{

    constructor(private http: HttpClient){} 
    listar(){
    return this.http
    .get<Documento[]>(API+'/listartudo');
    }
}
