import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'FFA Construtora - Caraguatatuba - SP' });
    this.meta.addTag({ name: 'keywords', content: 'Empreendimentos Imobiliários,Empreendimentos Caraguatatuba,Negócios Imobiliários, construção civil,projetos arquitetônicos, incorporação,Edifício Evora,Caraguatatuba,empreendimentos imobiliários caraguatatuba,empreendimentos imobiliários litoral norte' });
    this.meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'});
    this.meta.addTag({ name: 'author', content: 'FreeBits Tecnologia da Informação' });
    this.meta.addTag({charset: 'UTF-8'}); 
   }

  ngOnInit() {
  }

}