import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LinkInterface} from "../../types/link.interface";
import {PageRoutes} from "../../types/page-routes.enum";
import {AuthButtonsComponent} from "../auth-buttons/auth-buttons.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, AuthButtonsComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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

  get homeUrl(): PageRoutes {
    return  PageRoutes.Home
  }
}
