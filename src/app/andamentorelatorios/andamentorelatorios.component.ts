import { Component, OnInit, Input } from '@angular/core';
import { RelatorioService }  from '../andamentorelatorios/model/relatorio.service'
import { Relatorio } from './model/relatorio';


@Component({
  selector: 'app-andamentorelatorios',
  templateUrl: './andamentorelatorios.component.html',
  styleUrls: ['./andamentorelatorios.component.css']
})
export class AndamentorelatoriosComponent implements OnInit {

  constructor(private RelatorioService:RelatorioService) { }

  relatorios: Relatorio[]=[];
  


  ngOnInit() {

      this.RelatorioService.listar().subscribe(
        relatorios=>{
          //console.log(relatorios);
          this.relatorios=relatorios;
        }

      )


  }

}
