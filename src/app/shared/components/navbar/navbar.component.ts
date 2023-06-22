import { Component, Signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LinkInterface } from "../../types/link.interface";
import { PageRoutes } from "../../types/page-routes.enum";
import { AuthButtonsComponent } from "../auth-buttons/auth-buttons.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Store } from '@ngrx/store';
import { currentUserSelector, isLoggedInSelector } from 'src/app/auth/store/auth.selectors';
import { CurrentUserInterface } from '../../types/currentUser.interface';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, AuthButtonsComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly isLoggedIn: Signal<boolean | null> = this.store.selectSignal(isLoggedInSelector);
  readonly currentUser: Signal<CurrentUserInterface | null> = this.store.selectSignal(currentUserSelector);

  links: LinkInterface[] = [
    {
      url: PageRoutes.Home,
      text: 'Home'
    },
    {
      url: PageRoutes.About,
      text: 'About'
    },
    {
      url: PageRoutes.Contact,
      text: 'Contact'
    },
    {
      url: PageRoutes.Faq,
      text: 'FAQ'
    },
  ]

  constructor(private store: Store) { }

  get homeUrl(): PageRoutes {
    return PageRoutes.Home
  }

  logout(): void {
    this.store.dispatch(logoutAction())
  }
}
