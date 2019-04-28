import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { AndamentoobraComponent } from './andamentoobra/andamentoobra.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { GaleriaptipoComponent } from './galeriaptipo/galeriaptipo.component';
import { TabgaleriaComponent } from './tabgaleria/tabgaleria.component';
import { GalerialazerComponent } from './galerialazer/galerialazer.component';
import { GaleriacoberturaComponent } from './galeriacobertura/galeriacobertura.component';
import { GaleriafachadaComponent } from './galeriafachada/galeriafachada.component';
import { HallComponent } from './hall/hall.component';
import { TabandamentoComponent } from './tabandamento/tabandamento.component';
import { AndamentofotosComponent } from './andamentofotos/andamentofotos.component';
import { AndamentovideosComponent } from './andamentovideos/andamentovideos.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { AndamentorelatoriosComponent } from './andamentorelatorios/andamentorelatorios.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalfotosComponent } from './modalfotos/modalfotos.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material.module';
import { ModalComponent } from './modal/modal.component';
import { TitleComponent } from './title/title.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponentv2 } from './shared/modal/modalv2.component';
import { ApresentaffaComponent } from './apresentaffa/apresentaffa.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    QuemsomosComponent,
    AndamentoobraComponent,
    FooterComponent,
    LocalizacaoComponent,
    GaleriaptipoComponent,
    TabgaleriaComponent,
    GalerialazerComponent,
    GaleriacoberturaComponent,
    GaleriafachadaComponent,
    HallComponent,
    TabandamentoComponent,
    AndamentofotosComponent,
    AndamentovideosComponent,
    DocumentosComponent,
    AndamentorelatoriosComponent,
    ModalfotosComponent,
    MapaComponent,
    ModalComponent,
    TitleComponent,
    FaleconoscoComponent,
    ModalComponentv2,
    ApresentaffaComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-_itciix_bV_vajqCuJrlwpr934fwkUI'
    }),
    BrowserModule, BrowserAnimationsModule, MaterialModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  entryComponents: [ModalComponent, ModalComponentv2],
  bootstrap: [AppComponent]
})
export class AppModule { }
