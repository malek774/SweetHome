import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackplayerComponent } from './trackplayer/trackplayer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrackplayerComponent,
    SearchbarComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
