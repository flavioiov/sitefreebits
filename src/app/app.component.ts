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

  title='Freebits Tecnologia da Informação';

  constructor(
    private meta: Meta,
    private titleService : Title
    ) { }
  
   ngOnInit(){

    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'description', content: 'Freebits Tecnologia da Informação' });
    



   }
  



}



