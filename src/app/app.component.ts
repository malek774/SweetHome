import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit {
  title = 'angular-musicApp';
  spotifyKey: string;
  loggedIn: boolean;

  constructor(private route: ActivatedRoute, private _http: HttpService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.spotifyKey = this.route.snapshot.fragment.split('&')[0].substr(13);
    console.log(this.spotifyKey);
  }
  ngDoCheck() {
    // this.spotifyKey = this.route.snapshot.fragment.split('&')[0].substr(13);
    // console.log(this.spotifyKey);
  }

  openDashboard(bool) {
    this.loggedIn = bool;
    console.log(this.loggedIn);
    //this._http.loginAuth();

  }

}
