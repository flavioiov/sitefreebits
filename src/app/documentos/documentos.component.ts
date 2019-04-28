import { Component, OnInit, Input } from '@angular/core';
import { Documento } from '../documentos/model/documento';
import { DocumentoService } from '../documentos/model/documento.service';
import { localarquivos } from '../app.component';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  
  @Input() localdocs=localarquivos;

  constructor( private DocumentoService:DocumentoService) { }

  documentos: Documento[]=[];

  ngOnInit() {

      this.DocumentoService.listar().subscribe(
        documentos=>{
          this.documentos=documentos;
        }
      )
    

  }

}
