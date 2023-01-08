import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core-modules/footer/footer.component';
import { HeaderComponent } from './core-modules/header/header.component';
import { SidebarComponent } from './core-modules/sidebar/sidebar.component';
import { ParentSecureComponent } from './core-modules/parent-secure/parent-secure.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { WebComponentsComponent } from './modules/html/web-components/web-components.component';
import { CanvasComponent } from './modules/html/canvas/canvas.component';
import { BootstrapComponent } from './modules/css/bootstrap/bootstrap.component';
import { SassComponent } from './modules/css/sass/sass.component';
import { OopPrototypesComponent } from './modules/js/oop-prototypes/oop-prototypes.component';
import { AjaxComponent } from './modules/js/ajax/ajax.component';
import { FunctionalProgrammingComponent } from './modules/js/functional-programming/functional-programming.component';
import { EventsComponent } from './modules/js/events/events.component';
import { PatternsComponent } from './modules/js/patterns/patterns.component';
import { WebpackComponent } from './modules/js/webpack/webpack.component';
import { Http2Component } from './modules/js/http2/http2.component';
import { WebSocketsComponent } from './modules/js/web-sockets/web-sockets.component';
import { WebWorkersComponent } from './modules/html/web-workers/web-workers.component';
import { BemComponent } from './modules/css/bem/bem.component';
import { TransformationsComponent } from './modules/css/transformations/transformations.component';
import { RickMortyComponent } from './modules/home/rick-morty/rick-morty.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodesComponent } from './modules/home/rick-morty/episodes/episodes.component';
import { CharactersComponent } from './modules/home/rick-morty/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ParentSecureComponent,
    HomeComponent,
    WebComponentsComponent,
    CanvasComponent,
    BootstrapComponent,
    SassComponent,
    OopPrototypesComponent,
    AjaxComponent,
    FunctionalProgrammingComponent,
    EventsComponent,
    PatternsComponent,
    WebpackComponent,
    Http2Component,
    WebSocketsComponent,
    WebWorkersComponent,
    BemComponent,
    TransformationsComponent,
    RickMortyComponent,
    EpisodesComponent,
    CharactersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
