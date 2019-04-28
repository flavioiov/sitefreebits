import { Component, OnInit, Input } from '@angular/core';
import { Lazer } from './lazer';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';

const pastaimg='../../assets/lazer';

@Component({
  selector: 'app-galerialazer',
  templateUrl: './galerialazer.component.html',
  styleUrls: ['./galerialazer.component.css']
})
export class GalerialazerComponent implements OnInit {
  @Input() localimg='../../assets/aptotipo/living.jpeg';
  @Input() titulo='Sala de Estar';
  @Input() descricao='Sala de Estar';
  @Input() formato='quadrado';
 


  fotos: Lazer[] =[

    {
      localimg:pastaimg+'/hall.jpg',
      titulo: 'Hall de Entrada',
      descricao: 'Com o um pé direito duplo será entregue totalmente mobiliado',
      formato: 'retangular'
    },

    {
      localimg:pastaimg+'/brinquedoteca.jpg',
      titulo: 'Brinquedoteca',
      descricao: 'Um espaço dedicado as crianças',
      formato: 'retangular'
    },
    
    
    {
      localimg:pastaimg+'/jogos.jpg',
      titulo: 'Salão de Jogos Mobiliado ',
      descricao: 'Um sãlao de jogos para passar horas agradáveis com sua família',
      formato:'retangular'
    },
    {
      localimg:pastaimg+'/gourmetcomum.jpeg',
      titulo: 'Area Gourmet Comum',
      descricao: 'Uma área dedicada aos proprietários',
      formato: 'retangular'
    },
    {
      localimg:pastaimg+'/gourmet.jpg',
      titulo: 'Salão de Jantar e Festas',
      descricao:'Um salão de Jandar e Festas amplo',
      formato: 'retangular'
    },
    {
      localimg:pastaimg+'/plantalazer.jpeg',
      titulo: 'Planta baixa da área de lazer',
      descricao:'Area de lazer',
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
