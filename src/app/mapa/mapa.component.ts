import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  texto : string = 'Av. Antonio do Rego, 395 - Jardim Britânia - Caraguatatuba - São Paulo.';
  lat: number = -23.664133;
  lng: number = -45.434496;
  zoom: number = 15;



}
