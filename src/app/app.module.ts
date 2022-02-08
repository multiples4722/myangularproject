import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropdownModule,MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { EducationComponent } from './education/education.component';
import { PartnersComponent } from './partners/partners.component';
import { PeopleComponent } from './people/people.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ScientificComponent } from './scientific/scientific.component';
import { StudentsComponent } from './students/students.component';
import { IndustryComponent } from './industry/industry.component';
import { ResearchfacultyComponent } from './researchfaculty/researchfaculty.component';
import { Tc1Component } from './tc1/tc1.component';
import { Tc2Component } from './tc2/tc2.component';
import { Tc3Component } from './tc3/tc3.component';
import { Tc4Component } from './tc4/tc4.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { TeamsComponent } from './teams/teams.component';
import { ResearchomeComponent } from './researchome/researchome.component';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'research',
    component: ResearchComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'industry',
    component: IndustryComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'scientific',
    component: ScientificComponent,
  },
  {
    path: 'researchfaculty',
    component: ResearchfacultyComponent,
  },
  {
    path: 'tc1',
    component: Tc1Component,
  },
  {
    path: 'tc2',
    component: Tc2Component,
  },
  {
    path: 'tc3',
    component: Tc3Component,
  },
  {
    path: 'tc4',
    component: Tc4Component,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'researchome',
    component: ResearchomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
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
    ContentComponent,
    FooterComponent,
    ScientificComponent,
    StudentsComponent,
    IndustryComponent,
    ResearchfacultyComponent,
    Tc1Component,
    Tc2Component,
    Tc3Component,
    Tc4Component,
    NewsComponent,
    ContactComponent,
    TeamsComponent,
    ResearchomeComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    NgbModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration: 'enabled'}),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    DropdownModule
  ],
  providers: [
    {provide:LocationStrategy,
    useClass:HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
