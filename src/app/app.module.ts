import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangdingPageComponent } from './component/langding-page/langding-page.component';
import { SkiilsComponent } from './component/skiils/skiils.component';
import { AboutComponent } from './component/about/about.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AbtPageComponent } from './component/abt-page/abt-page.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ExperinceComponent } from './component/experince/experince.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
