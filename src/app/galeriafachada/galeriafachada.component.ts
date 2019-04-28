import { Component, OnInit, Input } from '@angular/core';
import { Fachada } from './fachada';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

const pastaimg ='../../assets/fachada';
@Component({
  selector: 'app-galeriafachada',
  templateUrl: './galeriafachada.component.html',
  styleUrls: ['./galeriafachada.component.css']
})
export class GaleriafachadaComponent implements OnInit {
  @Input() localimg='';
  @Input() titulo='';
  @Input() descricao='';
  @Input() formato='';
 
  fotos: Fachada[] =[

    {
      localimg: pastaimg+'/fachada.jpeg',
      titulo: 'Fachada Vista Lateral ',
      descricao: 'Fachada projetada para garantir seu conforto',
      formato: 'retangular'
    },
    {
      localimg: pastaimg+'/fachada2.jpg',
      titulo: 'Fachada Vista Frontal',
      descricao: 'Fachada e projeção ',
      formato: 'retangular'
    },
  ]

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
