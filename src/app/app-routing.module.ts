import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('src/app/tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('src/app/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('src/app/faq/faq.module').then(m => m.FaqModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
