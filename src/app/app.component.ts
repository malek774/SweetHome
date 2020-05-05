import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spotifyKey: string;

  constructor() {

  }

  ngOnInit() {
    this.spotifyKey = this.route.snapshot.fragment.split('&')[0].substr(13);
    console.log(this.spotifyKey);
  }
}
