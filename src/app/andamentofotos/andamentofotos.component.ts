import { Component, OnInit, Input } from '@angular/core';
import { FotoService } from './model/fotos.service';
import { Foto } from './model/fotos';
import { localarquivos } from '../app.component';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-andamentofotos',
  templateUrl: './andamentofotos.component.html',
  styleUrls: ['./andamentofotos.component.css']
})
export class AndamentofotosComponent implements OnInit {

  constructor(private FotoService:FotoService,
    public dialog: MatDialog
    ) { }

  lista:Foto[]=[];


  @Input() localimagens = localarquivos;


  ngOnInit() {

    this.FotoService.listar().subscribe(
      fotoslista => {

        console.log(fotoslista);
        this.lista = fotoslista;
      }


    )

  }

  openDialog(tit: string, desc: string, path: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: {
        titulo: tit,
        descricao: desc,
        caminho: path
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

}
