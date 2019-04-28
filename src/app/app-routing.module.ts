import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { GaleriaptipoComponent } from './galeriaptipo/galeriaptipo.component';
import { AndamentoobraComponent } from './andamentoobra/andamentoobra.component';
import { MapaComponent } from './mapa/mapa.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';

const routes: Routes = [
  { path: 'aptotipo', component: GaleriaptipoComponent},
  { path: 'quemsomos', component: QuemsomosComponent},
  { path: 'principal',component: PrincipalComponent},
  { path: 'andamento',component:AndamentoobraComponent},
  { path: 'mapa',component:MapaComponent},
  { path: 'faleconosco',component:FaleconoscoComponent},
  { path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
