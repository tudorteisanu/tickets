import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    FooterComponent
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
