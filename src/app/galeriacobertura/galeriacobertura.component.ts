import { Component, OnInit } from '@angular/core';
import { FotoCobertura } from './aptocobertura';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

const pastaimg ='../../assets/cobertura';

@Component({
  selector: 'app-galeriacobertura',
  templateUrl: './galeriacobertura.component.html',
  styleUrls: ['./galeriacobertura.component.css']
})


export class GaleriacoberturaComponent implements OnInit {

  fotos: FotoCobertura[] =[

    {
      localimg: pastaimg+'/lazer.jpeg',
      titulo: 'Área Externa Pavimento Superior',
      descricao: 'Área externa ampla, com churrasqueira e ofuro',
      formato: 'retangular'
    },
    
    {
      localimg: pastaimg+'/pisosuperior.jpeg',
      titulo: 'Living superior ',
      descricao: 'Living no andar superior,pode ser convertido em um quarto',
      formato: 'retangular'
    },

    
    {
      localimg: pastaimg+'/living2.jpeg',
      titulo: 'Living Parte inferior',
      descricao: 'Sala de estar parte inferior',
      formato:'retangular'
    },
    {
      localimg: pastaimg+'/living1.jpeg',
      titulo: 'Sala de Tv',
      descricao: 'Sala de Tv e jantar andar inferior',
      formato:'retangular'
    },
    
    {
      localimg: pastaimg+'/churrasqueira.jpeg',
      titulo: 'Varanda Gourmet',
      descricao: 'Um espaço dedicado ao seu lazer',
      formato: 'retangular'
    },

    {
      localimg: pastaimg+'/quartos.jpg',
      titulo: 'Quartos',
      descricao: 'Quartos com janelas de 2m e medidas acima do padrão',
      formato: 'retangular'
    },
    {
      localimg: pastaimg+'/plantainf.jpg',
      titulo: 'Planta piso inferior Cobertura',
      descricao: 'Planta do Apartamento',
      formato: 'quadrado'
    },
    {
      localimg: pastaimg+'/plantasup.jpg',
      titulo: 'Planta Piso superior da Cobertura',
      descricao: 'Planta Piso Superior do Apartamento',
      formato: 'quadrado'
    },
    

  ];

  constructor(public dialog: MatDialog) { }

  openDialog(tit:string,desc:string,path:string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: {
        titulo: tit , 
        descricao: desc,
        caminho:path  
      }
    });

    dialogRef.afterClosed().subscribe(result => {
     // this.animal = result;
    });
  }
  ngOnInit() {
  }
}
