import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AbtPageComponent } from './component/abt-page/abt-page.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ExperinceComponent } from './component/experince/experince.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { LangdingPageComponent } from './component/langding-page/langding-page.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SkiilsComponent } from './component/skiils/skiils.component';

const routes: Routes = [
  {
    path: 'langding-page', component:LangdingPageComponent
  },
  {
    path:'',
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
  {
    path:'skills', component:SkiilsComponent
  },
  {
    path: 'about',component:AboutComponent
  },
  {
    path:'landingPage',component:LandingPageComponent
  },
  {
    path:'navBar',component:NavBarComponent
  },
  {
    path:'abtPage',component:AbtPageComponent
  },
  {
    path:'contacts',component:ContactsComponent
  },
  {
    path:'experoence',component:ExperinceComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
