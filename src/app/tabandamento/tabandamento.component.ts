import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabandamento',
  templateUrl: './tabandamento.component.html',
  styleUrls: ['./tabandamento.component.css']
})
export class TabandamentoComponent implements OnInit {


  @Input() componente_mostrar="relatorios"; //aba que começa aberta 

  @Input() abarelatorios="active";
  @Input() abafotos="false";
  @Input() abadocumentos="false";
  @Input() abavideos="false";
  ativa="active";

  constructor() { }

  ngOnInit() {
  }
  clicado(valor: string ):void {
    
    this.componente_mostrar=valor;
    this.limpar_estado();
    this.setar_esta(valor);

  }

  limpar_estado(){

    this.abarelatorios="false";
    this.abafotos="false";
    this.abadocumentos="false";
    this.abavideos="false";
  

  }

  setar_esta(aba:string):void{
    
    if (aba=='fotos') { this.abafotos=this.ativa; }
    if (aba=='videos') { this.abavideos=this.ativa; }
    if (aba=='documentos') { this.abadocumentos=this.ativa; }
    if (aba=='relatorios') { this.abarelatorios=this.ativa;}




  }

 


}
