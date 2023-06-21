import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageRoutes} from "../../types/page-routes.enum";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get termsAndConditionsUrl(): PageRoutes {
    return PageRoutes.TermsAndConditions
  }

  get privacyPolicyUrl(): PageRoutes {
    return PageRoutes.PrivacyPolicy
  }
}
