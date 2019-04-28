import { Component, OnInit, Input } from '@angular/core';
import { FotoTipo } from './aptotipo';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';



const pastaimg='../../assets/aptotipo';

@Component({
  selector: 'app-galeriaptipo',
  templateUrl: './galeriaptipo.component.html',
  styleUrls: ['./galeriaptipo.component.css']
})


export class GaleriaptipoComponent implements OnInit {

  @Input() localimg='../../assets/aptotipo/living.jpeg';
  @Input() titulo='Sala de Estar';
  @Input() descricao='Sala de Estar';
  @Input() formato='quadrado';

  @Input() meuvalor='flavio';
 


  fotos: FotoTipo[] =[

    {
      localimg:pastaimg+'/living.jpeg',
      titulo: 'Sala de Estar',
      descricao: 'Cozinha americana, Pé Direito de 2,92m, Acabamento Alto Padrão',
      formato: 'retangular'
    },
    {
      localimg:pastaimg+'/gourmet.jpeg',
      titulo: 'Varanda Gourmet',
      descricao: 'Varanda Gourmet de 9m2 e Churrasqueira a carvão',
      formato: 'retangular'
    },

    
    {
      localimg:pastaimg+'/quarto.jpeg',
      titulo: 'Quartos com padrões diferenciados',
      descricao: 'Janelas de 2 m, tamanho dos quartos acima do padrão',
      formato:'retangular'
    },
    {
      localimg:pastaimg+'/gourmet2.jpeg',
      titulo: 'Planta do Apartamento Tipo',
      descricao: '77,37 m2 / 1 Vaga de Garagem , Planta Planejada',
      formato: 'retangular'
    },
    {
      localimg:pastaimg+'/planta.jpeg',
      titulo: 'Planta do Apartamento Tipo',
      descricao: '77,37 m2 / 1 Vaga de Garagem , Planta Planejada',
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
