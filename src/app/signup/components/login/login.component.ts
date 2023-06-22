import {Component} from '@angular/core';
import {PageRoutes} from "../../../shared/types/page-routes.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  get signUpUrl(): PageRoutes {
    return PageRoutes.SignUp
  }

}
