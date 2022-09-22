import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentSecureComponent } from './core-modules/parent-secure/parent-secure.component';
import { HomeComponent } from './modules/home/home.component';
import { WebComponentsComponent } from './modules/web-components/web-components.component';

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
