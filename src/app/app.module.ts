import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangdingPageComponent } from './Components/langding-page/langding-page.component';
import { SkiilsComponent } from './Components/skiils/skiils.component';
import { AboutComponent } from './Components/about/about.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AbtPageComponent } from './Components/abt-page/abt-page.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { ExperinceComponent } from './Components/experince/experince.component';

@NgModule({
  declarations: [
    AppComponent,
    LangdingPageComponent,
    SkiilsComponent,
    AboutComponent,
    LandingPageComponent,
    NavBarComponent,
    AbtPageComponent,
    ContactsComponent,
    ExperinceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
