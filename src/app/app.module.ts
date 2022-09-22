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
import { WebComponentsComponent } from './modules/web-components/web-components.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, SidebarComponent, ParentSecureComponent, HomeComponent, WebComponentsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
