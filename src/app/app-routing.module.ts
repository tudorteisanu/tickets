import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('src/app/tickets/tickets.module').then(m=> m.TicketsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/login/login.module').then(m=> m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('src/app/signup/signup.module').then(m=> m.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
