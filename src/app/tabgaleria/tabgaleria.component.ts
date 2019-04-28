import { Component, OnInit,Input } from '@angular/core';




@Component({
  selector: 'app-tabgaleria',
  templateUrl: './tabgaleria.component.html',
  styleUrls: ['./tabgaleria.component.css']
})
export class TabgaleriaComponent implements OnInit {


  @Input() componente_mostrar="Tipo"; 

  @Input() abatipo="active";
  @Input() abacobertura="false";
  @Input() abalazer="false";
  @Input() abafachada="false";
  @Input() abamapa="false";
  @Input() abaprogresso="false";

  abaselecionada="";
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

    this.abatipo="false";
    this.abacobertura="false";
    this.abalazer="false";
    this.abafachada="false";
    this.abamapa="false";
    this.abaprogresso="false";

  }

  setar_esta(aba:string):void{
    
    if (aba=='Tipo') { this.abatipo=this.ativa; }
    if (aba=='Cobertura') { this.abacobertura=this.ativa; }
    if (aba=='Fachada') { this.abafachada=this.ativa; }
    if (aba=='Lazer') { this.abalazer=this.ativa;}
    if (aba=='Mapa') { this.abamapa=this.ativa;}
    if (aba=='Progresso') { this.abaprogresso=this.ativa;}



  }

 




}
