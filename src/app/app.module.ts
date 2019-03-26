import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WebDevComponent } from './components/web-dev/web-dev.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'projects', component: ProjectsComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'web-dev', component: WebDevComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    AboutUsComponent,
    WebDevComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
