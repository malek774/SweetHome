import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackplayerComponent } from './trackplayer/trackplayer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ContentComponent } from './maincontent/content/content.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { MyplaylistComponent } from './myplaylist/myplaylist.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrackplayerComponent,
    SearchbarComponent,
    MaincontentComponent,
    ContentComponent,
    LoginpageComponent,
    DashboardComponent,
    HomeComponent,
    BrowseComponent,
    MyplaylistComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
