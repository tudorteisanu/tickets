import {Component} from '@angular/core';
import {PageRoutes} from "../../../shared/types/page-routes.enum";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  get loginUrl(): PageRoutes {
    return PageRoutes.LogIn
  }
}
