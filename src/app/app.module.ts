import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { EducationComponent } from './education/education.component';
import { PartnersComponent } from './partners/partners.component';
import { PeopleComponent } from './people/people.component';
import {Routes, RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';


const appRoutes:Routes=[
  {
    path: 'home',
    component: HomeComponent
},
{
  path: 'research',
  component: ResearchComponent
},
{
  path: 'education',
  component: EducationComponent
},
{
  path: 'partners',
  component: PartnersComponent
},
{
  path: 'people',
  component: PeopleComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResearchComponent,
    EducationComponent,
    PartnersComponent,
    PeopleComponent,
    HeaderComponent,
    CarouselComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
