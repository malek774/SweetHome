import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-musicApp';
  spotifyKey: string;

  constructor(private route: ActivatedRoute, private _http: HttpService) {

  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.spotifyKey = this.route.snapshot.fragment.split('&')[0].substr(13);
    console.log(this.spotifyKey);
  }

}
