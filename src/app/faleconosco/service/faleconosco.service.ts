import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ipfuncionamento } from 'src/app/app.component';
const API= ipfuncionamento+'/email';

@Injectable({
  providedIn: 'root'
})
export class FaleconoscoService {

  constructor(private http:HttpClient) {}

  enviamensagem(nome: string, telefone: string, email: string, mensagem: string, interesse: string){

    return this.http.post(API + '/enviaemail', { nome, telefone, email, mensagem, interesse })



  }

}


