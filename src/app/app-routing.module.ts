import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentSecureComponent } from './core-modules/parent-secure/parent-secure.component';
import { CanvasComponent } from './modules/html/canvas/canvas.component';
import { BootstrapComponent } from './modules/css/bootstrap/bootstrap.component';
import { SassComponent } from './modules/css/sass/sass.component';
import { HomeComponent } from './modules/home/home.component';
import { WebComponentsComponent } from './modules/html/web-components/web-components.component';
import { WebWorkersComponent } from './modules/html/web-workers/web-workers.component';
import { OopPrototypesComponent } from './modules/js/oop-prototypes/oop-prototypes.component';
import { AjaxComponent } from './modules/js/ajax/ajax.component';
import { FunctionalProgrammingComponent } from './modules/js/functional-programming/functional-programming.component';
import { EventsComponent } from './modules/js/events/events.component';
import { PatternsComponent } from './modules/js/patterns/patterns.component';
import { WebpackComponent } from './modules/js/webpack/webpack.component';
import { Http2Component } from './modules/js/http2/http2.component';
import { WebSocketsComponent } from './modules/js/web-sockets/web-sockets.component';
import { BemComponent } from './modules/css/bem/bem.component';
import { TransformationsComponent } from './modules/css/transformations/transformations.component';

const routes: Routes = [
  {
    path: '',
    component: ParentSecureComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'html',
        children: [
          { path: '', redirectTo: '/web-components', pathMatch: 'full' },
          { path: 'web-components', component: WebComponentsComponent },
          { path: 'web-workers', component: WebWorkersComponent },
          { path: 'canvas', component: CanvasComponent },
        ],
      },
      {
        path: 'css',
        children: [
          { path: '', redirectTo: '/bootstrap', pathMatch: 'full' },
          { path: 'bootstrap', component: BootstrapComponent },
          { path: 'sass', component: SassComponent },
          { path: 'bem', component: BemComponent },
          { path: 'transformations', component: TransformationsComponent },
        ],
      },
      {
        path: 'js',
        children: [
          { path: '', redirectTo: '/oop', pathMatch: 'full' },
          { path: 'oop', component: OopPrototypesComponent },
          { path: 'ajax', component: AjaxComponent },
          { path: 'functional-programming', component: FunctionalProgrammingComponent },
          { path: 'events', component: EventsComponent },
          { path: 'patterns', component: PatternsComponent },
          { path: 'browserify', component: WebpackComponent },
          { path: 'http2', component: Http2Component },
          { path: 'websockets', component: WebSocketsComponent },
        ],
      },
    ],
  },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
