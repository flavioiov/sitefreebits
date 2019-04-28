import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';

export const ipfuncionamento='http://191.252.2.163:8080/freebits/siteffa';
export const localarquivos='http://191.252.2.163:8080/site/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title='FFA Construtora Lean - Caraguatatuba';

  constructor(
    private meta: Meta,
    private titleService : Title
    ) { }
  
   ngOnInit(){

    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'description', content: 'FFA Construtora - Caraguatatuba - SP' });
    this.meta.addTag({ name: 'keywords', content: 'incorporadora Caraguatatuba,Imobiliário,Empreendimentos Caraguatatuba, Negócios Imobiliários, construção civil,projetos arquitetônicos, incorporação, Edifício Evora, Caraguatatuba,empreendimentos imobiliários caraguatatuba,empreendimentos imobiliários litoral norte, construtora, construtora de predios, lean construction, lean manufactoring' });
    this.meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'});
    this.meta.addTag({ name: 'author', content: 'FreeBits Tecnologia da Informação' });
    this.meta.addTag({charset: 'UTF-8'}); 
    console.log(this.meta.getTags('name=description'));
    console.log(this.meta.getTags('name=keywords'));



   }
  



}



