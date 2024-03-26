import { Routes } from '@angular/router';
import { PrinciplesComponent } from './principles/principles.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StructureComponent } from './structure/structure.component';

export const routes: Routes = [
  {
    path: 'maidan',
    loadComponent: () =>
      import('./maidan/maidan.component').then((m) => m.MaidanComponent),
  },
  {
    path: 'principles',
    component: PrinciplesComponent,
    title: 'Принципы',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    title: 'База',
  },
  {
    path: 'structure',
    component: StructureComponent,
    title: 'Структура Базы',
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
];
